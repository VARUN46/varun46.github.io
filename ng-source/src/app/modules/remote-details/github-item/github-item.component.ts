import { Component, OnInit, Input } from '@angular/core';
import { githubItem } from 'src/app/entities/githubItem';

@Component({
  selector: 'app-github-item',
  templateUrl: './github-item.component.html',
  styleUrls: ['./github-item.component.css']
})
export class GithubItemComponent implements OnInit {



  @Input() item: githubItem;
  constructor() { }

  ngOnInit(): void {
  }

}
