import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLiveAppsComponent } from './my-live-apps.component';

describe('MyLiveAppsComponent', () => {
  let component: MyLiveAppsComponent;
  let fixture: ComponentFixture<MyLiveAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLiveAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLiveAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
