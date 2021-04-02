import { TestBed } from '@angular/core/testing';

import { SearchresolverService } from './searchresolver.service';

describe('SearchresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchresolverService = TestBed.get(SearchresolverService);
    expect(service).toBeTruthy();
  });
});
