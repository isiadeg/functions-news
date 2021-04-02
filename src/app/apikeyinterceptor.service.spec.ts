import { TestBed } from '@angular/core/testing';

import { ApikeyinterceptorService } from './apikeyinterceptor.service';

describe('ApikeyinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApikeyinterceptorService = TestBed.get(ApikeyinterceptorService);
    expect(service).toBeTruthy();
  });
});
