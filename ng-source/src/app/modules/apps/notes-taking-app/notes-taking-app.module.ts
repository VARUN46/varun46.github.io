import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesTakingAppRoutingModule } from './notes-taking-app-routing.module';
import { AppComponent } from './app/app.component';
import { NoteItemComponent } from './note-item/note-item.component';


@NgModule({
  declarations: [AppComponent, NoteItemComponent],
  imports: [
    CommonModule,
    NotesTakingAppRoutingModule
  ]
})
export class NotesTakingAppModule { }
