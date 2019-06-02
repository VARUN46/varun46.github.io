import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyStackItemComponent } from './technology-stack-item.component';

describe('TechnologyStackItemComponent', () => {
  let component: TechnologyStackItemComponent;
  let fixture: ComponentFixture<TechnologyStackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyStackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyStackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
