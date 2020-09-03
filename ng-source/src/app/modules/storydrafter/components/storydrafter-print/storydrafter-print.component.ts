import { Component, OnInit, AfterViewInit } from '@angular/core';
import { storyDraft } from '../../entities/storyDraft';
import { AppScopeService } from '../../../../services/app-scope.service';

@Component({
  selector: 'app-storydrafter-print',
  templateUrl: './storydrafter-print.component.html',
  styleUrls: ['./storydrafter-print.component.css']
})
export class StorydrafterPrintComponent{

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
    this.readTimeMinutes = this.printData!==null?Math.ceil(this.printData.wordsCount/50):0;
    document.body.style.background="#FFF";
    document.body.style.color="#000"; 
  }
  onPrint(): void {
    
    window.print(); 
  }
  

  


}
