import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDrafterComponent } from './story-drafter.component';

describe('StoryDrafterComponent', () => {
  let component: StoryDrafterComponent;
  let fixture: ComponentFixture<StoryDrafterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryDrafterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDrafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
