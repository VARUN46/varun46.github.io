import { Component, OnInit } from '@angular/core';
import { FetchReposService } from './fetch-repos.service';
import { RepositoryDetails } from './RepositoryDetails';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  repos: RepositoryDetails[];
  constructor(private svcRequest: FetchReposService) {
    this.repos = [];
    this.IsLoadingData = true;
  }
  IsLoadingData: boolean;

  ngOnInit() {
    this.svcRequest.getVarunRepos().subscribe(
      data => {
        data.forEach(item => {
          if (!item.fork) {
            this.repos.push(item);
          }
        });
        this.IsLoadingData = false;

       }
      );

  }

}
