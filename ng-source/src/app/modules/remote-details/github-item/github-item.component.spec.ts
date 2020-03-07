import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubItemComponent } from './github-item.component';

describe('GithubItemComponent', () => {
  let component: GithubItemComponent;
  let fixture: ComponentFixture<GithubItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
