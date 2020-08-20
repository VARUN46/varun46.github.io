import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitBlogComponent } from './bit-blog.component';

describe('BitBlogComponent', () => {
  let component: BitBlogComponent;
  let fixture: ComponentFixture<BitBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
