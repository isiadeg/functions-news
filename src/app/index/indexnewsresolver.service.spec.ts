import { TestBed } from '@angular/core/testing';

import { IndexnewsresolverService } from './indexnewsresolver.service';

describe('IndexnewsresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexnewsresolverService = TestBed.get(IndexnewsresolverService);
    expect(service).toBeTruthy();
  });
});
