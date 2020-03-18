import { TestBed } from '@angular/core/testing';

import { NotesDataCommunicationService } from './notes-data-communication.service';

describe('NotesDataCommunicationService', () => {
  let service: NotesDataCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesDataCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
