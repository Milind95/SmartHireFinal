import { TestBed } from '@angular/core/testing';

import { LoaderMobileService } from './loader-mobile.service';

describe('LoaderMobileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderMobileService = TestBed.get(LoaderMobileService);
    expect(service).toBeTruthy();
  });
});
