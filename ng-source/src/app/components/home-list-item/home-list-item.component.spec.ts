import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListItemComponent } from './home-list-item.component';

describe('HomeListItemComponent', () => {
  let component: HomeListItemComponent;
  let fixture: ComponentFixture<HomeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
