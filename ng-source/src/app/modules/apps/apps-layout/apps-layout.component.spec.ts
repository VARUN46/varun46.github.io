import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsLayoutComponent } from './apps-layout.component';

describe('AppsLayoutComponent', () => {
  let component: AppsLayoutComponent;
  let fixture: ComponentFixture<AppsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
