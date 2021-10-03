import { AfterViewInit, Component, OnInit } from '@angular/core';
import { githubGetReposResponse } from 'src/app/commons/entities/githubGetReposResponse';
import { GithubService } from 'src/app/commons/services/github/github.service';
import { LoaderService } from 'src/app/commons/services/loader/loader.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit,AfterViewInit {

  projects: githubGetReposResponse[] = [];

  constructor(private loader:LoaderService,private github:GithubService) { }


  ngAfterViewInit(): void {
    this.loader.SHOW_LOADER = false;
  }

  ngOnInit(): void {
    let projs = this.github.getProjects('varun46');
    projs.subscribe(result=>{
      this.projects = result.filter(p=>!p.fork);
    });
  }

}
