import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorydrafterDraftComponent } from './storydrafter-draft.component';

describe('StorydrafterDraftComponent', () => {
  let component: StorydrafterDraftComponent;
  let fixture: ComponentFixture<StorydrafterDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorydrafterDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorydrafterDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
