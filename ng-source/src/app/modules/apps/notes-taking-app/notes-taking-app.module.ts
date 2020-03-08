import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesTakingAppRoutingModule } from './notes-taking-app-routing.module';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NotesTakingAppRoutingModule
  ]
})
export class NotesTakingAppModule { }
