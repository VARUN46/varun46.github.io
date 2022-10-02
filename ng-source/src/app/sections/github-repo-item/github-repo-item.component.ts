import { Component, OnInit, Input } from '@angular/core';
import { githubRepo } from '../../entities/githubRepo';

@Component({
  selector: 'app-github-repo-item',
  templateUrl: './github-repo-item.component.html',
  styleUrls: ['./github-repo-item.component.css']
})
export class GithubRepoItemComponent implements OnInit {

  @Input() githubRepoItem: githubRepo = new githubRepo();

  constructor() { }

  ngOnInit(): void {
  }

}
