import { TestBed } from '@angular/core/testing';

import { StoryFinalGuard } from './story-final.guard';

describe('StoryFinalGuard', () => {
  let guard: StoryFinalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StoryFinalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
