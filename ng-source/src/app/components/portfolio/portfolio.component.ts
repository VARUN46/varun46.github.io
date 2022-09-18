import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { githubRepo } from 'src/app/entities/githubRepo';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  githubItems: Observable<githubRepo[]> = of([]);

  constructor(public githubService:GithubService) {
    try {
      this.githubService.getAllRepos().subscribe(items=>{
        this.githubItems = of(items);
      });
    } catch (error) {
      this.githubService.getAllReposFallback().subscribe(items=>{
        this.githubItems = of(items);
      });
    }

   }

  ngOnInit(): void {
  }

}
