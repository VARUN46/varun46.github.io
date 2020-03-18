import { Component, OnInit, Input  } from '@angular/core';
import { NotesDataCommunicationService } from '../services/notes-data-communication.service';
import { note } from '../entities/note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() isNew: string;
  @Input() id: number;
  @Input() text: string;

  constructor(public notesDataSvc:NotesDataCommunicationService) {
    this.id = -1;
    this.text = '';
   }

  ngOnInit(): void {
  }

  createNote(data : any){
    let noteItem: note = new note();
    
    noteItem.noteText = data.value; 
    console.log(noteItem);
    this.notesDataSvc.addNote(noteItem);
  }

}
