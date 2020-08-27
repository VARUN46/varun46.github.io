import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyWorkExperienceComponent } from './my-work-experience/my-work-experience.component';
import { BitBlogComponent } from './bit-blog/bit-blog.component';
import { StoryDrafterComponent } from './story-drafter/story-drafter.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
{ path:'', component:HomeComponent },
{ path:'details',component:MyDetailsComponent },
{ path:'work',component:MyWorkExperienceComponent },
{ path:'blog',component:BitBlogComponent },
{ path:'story-drafter',component:StoryDrafterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
