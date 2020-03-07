import { TestBed } from '@angular/core/testing';

import { TechStackService } from './tech-stack.service';

describe('TechStackService', () => {
  let service: TechStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
