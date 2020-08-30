import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFinalComponent } from './story-final.component';

describe('StoryFinalComponent', () => {
  let component: StoryFinalComponent;
  let fixture: ComponentFixture<StoryFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
