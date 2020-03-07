import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesListItemComponent } from './technologies-list-item.component';

describe('TechnologiesListItemComponent', () => {
  let component: TechnologiesListItemComponent;
  let fixture: ComponentFixture<TechnologiesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
