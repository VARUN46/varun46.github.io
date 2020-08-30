import { Component, OnInit } from '@angular/core';
import { storyDraft } from './entities/storyDraft';


@Component({
  selector: 'app-story-drafter',
  templateUrl: './story-drafter.component.html',
  styleUrls: ['./story-drafter.component.css']
})
export class StoryDrafterComponent implements OnInit {

  public storyDraftCreate: storyDraft;
  public showTips: number = 0;
  public toggleMessageData: object;
  public paragraphTracker: number[];
  private draftLocalStorageKey = "draft";

  constructor() {
    this.initDataParam();
    this.toggleMessageData = {
      1:'Hide Tips',
      0:'Show Tips'
    };


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
    localStorage.clear();
  }

   
  ngOnInit(): void {
    const localStorageData = localStorage.getItem(this.draftLocalStorageKey);
    
    if(typeof(localStorageData)!=='undefined' && localStorageData!==null){
      this.storyDraftCreate.paragraphs = [];
      this.paragraphTracker = [];
      this.storyDraftCreate = JSON.parse(localStorageData);
      
      for(let v=0;v<this.storyDraftCreate.paragraphs.length;v++){
        this.paragraphTracker.push(v);
      } 
      this.storyDraftCreate.draftStatus = "Read From Locally";
    }
  }

  toggleTips(){
    this.showTips = this.showTips==0 ? 1 : 0;
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
   
    }

    countWords(stringVal: string){
      let lengthResult = 0;
      let ToReadWords = stringVal.split(' ').filter(word=>typeof(word)!=="undefined" && word.length>0);
      
      if(ToReadWords.length>0){
        lengthResult = ToReadWords.map(c=>1).reduce((pre,curr)=>(pre+curr));
      }
      return lengthResult;
    }





}
