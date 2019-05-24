import { TestBed } from '@angular/core/testing';

import { ToastrMobileService } from './toastr-mobile.service';

describe('ToastrMobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastrMobileService = TestBed.get(ToastrMobileService);
    expect(service).toBeTruthy();
  });
});
