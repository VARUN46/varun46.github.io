import { Component, OnInit } from '@angular/core';
import { storyDraft } from '../../entities/storyDraft';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-storydrafter-draft',
  templateUrl: './storydrafter-draft.component.html',
  styleUrls: ['./storydrafter-draft.component.css']
})
export class StorydrafterDraftComponent implements OnInit {

  public storyDraftCreate: storyDraft;
  public paragraphTracker: number[];
  private draftLocalStorageKey = "draft";
  public percentageLimit: number = 0;

  constructor(private _bottomSheet: MatBottomSheet) {
    this.initDataParam();
   

  }


  openTipsSheet(): void {
    this._bottomSheet.open(BottomStoryDrafterTipsSheet);
  }

  initDataParam(){ 
    this.storyDraftCreate = new storyDraft();
    this.storyDraftCreate.title="";
    this.storyDraftCreate.paragraphs = [];
    this.storyDraftCreate.paragraphsCount = 0;
    this.storyDraftCreate.summary = "";
    this.storyDraftCreate.charactersCount = 0;
    this.storyDraftCreate.wordsCount = 0;
    this.storyDraftCreate.draftStatus = "Uncommited";
    this.paragraphTracker = [];
    this.storyDraftCreate.paragraphs.push("");
    this.paragraphTracker.push(0);
  }

  reset(){
    this.initDataParam();
    this.calculatePercentage();      
    localStorage.clear();
  }

   
  ngOnInit(): void {
    const localStorageData = localStorage.getItem(this.draftLocalStorageKey);
    
    if(typeof(localStorageData)!=='undefined' && localStorageData!==null){
      this.storyDraftCreate.paragraphs = [];
      this.paragraphTracker = [];
      this.storyDraftCreate = JSON.parse(localStorageData);
      this.calculatePercentage();  
      for(let v=0;v<this.storyDraftCreate.paragraphs.length;v++){
        this.paragraphTracker.push(v);
      } 
      this.storyDraftCreate.draftStatus = "Read From Locally";
    }
  }


   addPara(){
     this.storyDraftCreate.paragraphs.push("");
     this.storyDraftCreate.paragraphsCount=this.storyDraftCreate.paragraphs.length;
     this.paragraphTracker.push(this.storyDraftCreate.paragraphsCount-1);
   }

   countOnKeyUp(){
    this.storyDraftCreate.charactersCount = this.storyDraftCreate.title.length 
    + this.storyDraftCreate.paragraphs.map(c=>c.length).reduce((pre,curr)=>(pre+curr))
    + this.storyDraftCreate.summary.length;
   
    this.storyDraftCreate.wordsCount = this.countWords(this.storyDraftCreate.title)
                                            +this.countWords(this.storyDraftCreate.summary)
                                            +this.storyDraftCreate.paragraphs.map(p=>this.countWords(p)).reduce((pre,curr)=>(pre+curr));
  
    
    this.storyDraftCreate.draftStatus="Saved Locally";
    localStorage.setItem(this.draftLocalStorageKey,JSON.stringify(this.storyDraftCreate));   
    this.calculatePercentage();  
  }

    countWords(stringVal: string){
      let lengthResult = 0;
      let ToReadWords = stringVal.split(' ').filter(word=>typeof(word)!=="undefined" && word.length>0);
      
      if(ToReadWords.length>0){
        lengthResult = ToReadWords.map(c=>1).reduce((pre,curr)=>(pre+curr));
      }
      return lengthResult;
    }

    calculatePercentage(){
      this.percentageLimit = (this.storyDraftCreate.wordsCount/15);//count*1500/100
    }




}

@Component({
  selector:'bottom-storydrafter-tips-sheet',
  templateUrl:'./bottom-storydrafter-tips.html'
})
export class BottomStoryDrafterTipsSheet{
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomStoryDrafterTipsSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}