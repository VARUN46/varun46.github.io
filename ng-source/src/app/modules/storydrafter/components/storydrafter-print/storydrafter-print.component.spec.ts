import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorydrafterPrintComponent } from './storydrafter-print.component';

describe('StorydrafterPrintComponent', () => {
  let component: StorydrafterPrintComponent;
  let fixture: ComponentFixture<StorydrafterPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorydrafterPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorydrafterPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
