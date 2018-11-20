import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  returnUrl: string;
  isIEOrEdge = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private msgSvc: MessageService
  ) {

  }
  hasFormErrors() {
    return !this.signInForm.valid;
  }
  ngOnInit() {
    localStorage.clear();
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.signInForm.controls;
  }



  validateuser() {
    localStorage.setItem('UserName', 'Sudheer');
    localStorage.setItem('UserId', '3');
    localStorage.setItem('UserRole', 'Admin');
    this.router.navigate(['/menu/dashboard']);
  }

  redirect() {
    // this.router.navigate(['user']);
  }

  onSubmit() {
    if (this.signInForm.invalid) {
      return;
    } else {
      this.validateuser();
    }
  }

  onReject() {
    this.msgSvc.clear('alert');
  }

}
