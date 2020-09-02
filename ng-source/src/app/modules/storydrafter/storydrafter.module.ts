import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorydrafterDraftComponent } from './components/storydrafter-draft/storydrafter-draft.component';
import { FormsModule } from '@angular/forms';
import { StorydrafterPrintComponent } from './components/storydrafter-print/storydrafter-print.component';
import { RouterModule } from '@angular/router';
import { StoryDrafterRouting } from './storydrafter-routing.module';


@NgModule({
  declarations: [StorydrafterDraftComponent, StorydrafterPrintComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    StoryDrafterRouting,
  ],
  exports:[
    StorydrafterDraftComponent,
    StorydrafterPrintComponent
  ]
})
export class StorydrafterModule { }
