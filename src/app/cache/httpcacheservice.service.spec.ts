import { TestBed } from '@angular/core/testing';

import { HttpcacheserviceService } from './httpcacheservice.service';

describe('HttpcacheserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpcacheserviceService = TestBed.get(HttpcacheserviceService);
    expect(service).toBeTruthy();
  });
});
