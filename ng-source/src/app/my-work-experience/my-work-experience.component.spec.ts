import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkExperienceComponent } from './my-work-experience.component';

describe('MyWorkExperienceComponent', () => {
  let component: MyWorkExperienceComponent;
  let fixture: ComponentFixture<MyWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
