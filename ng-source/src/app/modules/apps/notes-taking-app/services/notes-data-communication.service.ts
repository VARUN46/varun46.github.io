import { Injectable } from '@angular/core';
import { note } from '../entities/note';

@Injectable()
export class NotesDataCommunicationService {

  notesList: note[];
  constructor() {
    this.notesList = [];
   }

  addNote(note: note){
    this.notesList.push(note);
  }

  getNotesList(): note[]{
    return this.notesList;
  }
}
