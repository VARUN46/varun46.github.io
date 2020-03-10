import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() isNew: string;

  constructor() { }

  ngOnInit(): void {
  }

}
