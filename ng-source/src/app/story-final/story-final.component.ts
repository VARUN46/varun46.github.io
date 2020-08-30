import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { AppScopeService } from '../services/app-scope.service';
import { storyDraft } from '../story-drafter/entities/storyDraft';

@Component({
  selector: 'app-story-final',
  templateUrl: './story-final.component.html',
  styleUrls: ['./story-final.component.css']
})
export class StoryFinalComponent implements OnInit,AfterViewInit {

  public printData: storyDraft;
  public readTimeMinutes: number;

  constructor(private appSvc:AppScopeService) {
    this.appSvc.showNavigation = false;
    this.printData = JSON.parse(localStorage.getItem('draft'));
    if(this.printData==null){
      this.printData = new storyDraft();
      this.printData.title = "Not Set";
      this.printData.wordsCount = 0;
      
    }
    this.readTimeMinutes = this.printData!==null?Math.ceil(this.printData.wordsCount/20):0;
   }
  ngAfterViewInit(): void {
    window.print(); 
  }
  

  ngOnInit(): void {
    document.body.style.background="#FFF";
    document.body.style.color="#000";
   
  }

}
