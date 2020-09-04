import { Component, OnInit } from '@angular/core';
import { app } from './entities/app';

@Component({
  selector: 'app-appzz',
  templateUrl: './appzz.component.html',
  styleUrls: ['./appzz.component.css']
})
export class AppzzComponent implements OnInit {


  public apps:app[] = [];

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    const app1 :app = new app();
    app1.icon = "notes";
    app1.routeLink="/story/draft";
    app1.title = "Story Drafter";
    this.apps.push(app1);

  }

}
