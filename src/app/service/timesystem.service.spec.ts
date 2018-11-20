import { TestBed } from '@angular/core/testing';

import { TimesystemService } from './timesystem.service';

describe('TimesystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimesystemService = TestBed.get(TimesystemService);
    expect(service).toBeTruthy();
  });
});
