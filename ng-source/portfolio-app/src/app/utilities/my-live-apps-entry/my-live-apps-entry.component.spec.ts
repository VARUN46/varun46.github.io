import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLiveAppsEntryComponent } from './my-live-apps-entry.component';

describe('MyLiveAppsEntryComponent', () => {
  let component: MyLiveAppsEntryComponent;
  let fixture: ComponentFixture<MyLiveAppsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLiveAppsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLiveAppsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
