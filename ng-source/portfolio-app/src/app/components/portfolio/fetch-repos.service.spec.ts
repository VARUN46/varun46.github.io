import { TestBed } from '@angular/core/testing';

import { FetchReposService } from './fetch-repos.service';

describe('FetchReposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchReposService = TestBed.get(FetchReposService);
    expect(service).toBeTruthy();
  });
});
