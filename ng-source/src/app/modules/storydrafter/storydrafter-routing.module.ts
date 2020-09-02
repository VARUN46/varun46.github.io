import { Routes, RouterModule } from '@angular/router';
import { StorydrafterDraftComponent } from './components/storydrafter-draft/storydrafter-draft.component';
import { StorydrafterPrintComponent } from './components/storydrafter-print/storydrafter-print.component';
import { NgModule } from '@angular/core';
import { StoryFinalGuard } from './guards/story-final.guard';

const routes: Routes = [
    { path:'draft', component:StorydrafterDraftComponent },
    { path:'print', component:StorydrafterPrintComponent, canDeactivate:[StoryFinalGuard] }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class StoryDrafterRouting{ }