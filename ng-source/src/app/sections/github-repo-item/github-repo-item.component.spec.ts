import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoItemComponent } from './github-repo-item.component';

describe('GithubRepoItemComponent', () => {
  let component: GithubRepoItemComponent;
  let fixture: ComponentFixture<GithubRepoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubRepoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
