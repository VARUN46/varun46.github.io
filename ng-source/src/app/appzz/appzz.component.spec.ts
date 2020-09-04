import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppzzComponent } from './appzz.component';

describe('AppzzComponent', () => {
  let component: AppzzComponent;
  let fixture: ComponentFixture<AppzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppzzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
