import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-github-repo-item',
  templateUrl: './github-repo-item.component.html',
  styleUrls: ['./github-repo-item.component.css']
})
export class GithubRepoItemComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
