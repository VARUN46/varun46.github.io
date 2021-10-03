import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemCardComponent } from './portfolio-item-card.component';

describe('PortfolioItemCardComponent', () => {
  let component: PortfolioItemCardComponent;
  let fixture: ComponentFixture<PortfolioItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
