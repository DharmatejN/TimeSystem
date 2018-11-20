import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-fielderrors',
  templateUrl: './fielderrors.component.html',
  styleUrls: ['./fielderrors.component.css']
})
export class FielderrorsComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('form') form: FormGroup;
  // tslint:disable-next-line:no-input-rename
  @Input('field') fieldName: string;
  // tslint:disable-next-line:no-input-rename
  @Input('nicename') niceName: string;

  constructor(private msgSvc: MessageService) { }

  ngOnInit() {
  }

  fieldErrors(field: string) {
    const controlState = this.form.controls[field];
    return ((controlState.touched || controlState.dirty) && controlState.errors) ? controlState.errors : null;
  }

}
