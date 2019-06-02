import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWebsiteComponent } from './about-website.component';

describe('AboutWebsiteComponent', () => {
  let component: AboutWebsiteComponent;
  let fixture: ComponentFixture<AboutWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
