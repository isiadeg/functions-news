import { TestBed } from '@angular/core/testing';

import { FetchindexnewsService } from './fetchindexnews.service';

describe('FetchindexnewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchindexnewsService = TestBed.get(FetchindexnewsService);
    expect(service).toBeTruthy();
  });
});
