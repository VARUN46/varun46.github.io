import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyStackItemsComponent } from './technology-stack-items.component';

describe('TechnologyStackItemsComponent', () => {
  let component: TechnologyStackItemsComponent;
  let fixture: ComponentFixture<TechnologyStackItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyStackItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyStackItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
