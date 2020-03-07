import { Component, OnInit } from '@angular/core';
import { githubItem } from 'src/app/entities/githubItem';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-item-list',
  templateUrl: './github-item-list.component.html',
  styleUrls: ['./github-item-list.component.css']
})
export class GithubItemListComponent implements OnInit {

  public githubItemsList: githubItem[];
  public isVisible : boolean;

  constructor(public svc : GithubService) {
      this.githubItemsList = [];
   }

  ngOnInit(): void {
    this.svc.getRepos().subscribe( data => { 
      this.githubItemsList = data;
      this.githubItemsList = this.githubItemsList.filter(item=>!item.fork);
      this.isVisible = true;
    });
  }

}
