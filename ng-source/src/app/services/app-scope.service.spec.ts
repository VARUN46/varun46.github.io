import { TestBed } from '@angular/core/testing';

import { AppScopeService } from './app-scope.service';

describe('AppScopeService', () => {
  let service: AppScopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppScopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
