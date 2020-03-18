import { Component, OnInit } from '@angular/core';
import { note } from '../entities/note';
import { NotesDataCommunicationService } from '../services/notes-data-communication.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesDataCommunicationService]
})
export class AppComponent implements OnInit {


  appNoteItemClass :string;
  constructor(public notesDataSvc: NotesDataCommunicationService) { 
    this.appNoteItemClass = 'col-3 slds-m-vertical_small';
  }

  ngOnInit(): void {
  }

  get() : note[]{
    console.log(this.notesDataSvc.getNotesList());
    return this.notesDataSvc.getNotesList();
  }

}
