import { Routes, RouterModule } from '@angular/router';
import { StorydrafterDraftComponent } from './components/storydrafter-draft/storydrafter-draft.component';
import { StorydrafterPrintComponent } from './components/storydrafter-print/storydrafter-print.component';
import { NgModule } from '@angular/core';
import { StoryFinalGuard } from './guards/story-final.guard';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';


const routes: Routes = [
    { path:'draft', component:StorydrafterDraftComponent },
    { path:'print', component:StorydrafterPrintComponent, canDeactivate:[StoryFinalGuard] }
];

@NgModule({
    imports:[RouterModule.forChild(routes), MatInputModule, MatProgressBarModule, MatBottomSheetModule],
    exports:[RouterModule, MatInputModule, MatProgressBarModule, MatBottomSheetModule]
})
export class StoryDrafterRouting{ }