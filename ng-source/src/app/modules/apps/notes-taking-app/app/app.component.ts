import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  appNoteItemClass :string;
  constructor() { 
    this.appNoteItemClass = 'col-3 slds-m-vertical_small';
  }

  ngOnInit(): void {
  }

}
