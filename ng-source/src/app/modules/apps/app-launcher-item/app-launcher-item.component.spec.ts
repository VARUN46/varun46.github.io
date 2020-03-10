import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLauncherItemComponent } from './app-launcher-item.component';

describe('AppLauncherItemComponent', () => {
  let component: AppLauncherItemComponent;
  let fixture: ComponentFixture<AppLauncherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLauncherItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLauncherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
