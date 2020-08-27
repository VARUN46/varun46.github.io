import { TestBed } from '@angular/core/testing';

import { SubmitDraftService } from './submit-draft.service';

describe('SubmitDraftService', () => {
  let service: SubmitDraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitDraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
