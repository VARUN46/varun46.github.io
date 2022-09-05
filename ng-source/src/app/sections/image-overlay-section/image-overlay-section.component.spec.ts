import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOverlaySectionComponent } from './image-overlay-section.component';

describe('ImageOverlaySectionComponent', () => {
  let component: ImageOverlaySectionComponent;
  let fixture: ComponentFixture<ImageOverlaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOverlaySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageOverlaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
