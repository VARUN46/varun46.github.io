import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubItemListComponent } from './github-item-list.component';

describe('GithubItemListComponent', () => {
  let component: GithubItemListComponent;
  let fixture: ComponentFixture<GithubItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
