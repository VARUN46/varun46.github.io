import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyWorkExperienceComponent } from './my-work-experience/my-work-experience.component';
import { BitBlogComponent } from './bit-blog/bit-blog.component';
import { StoryDrafterComponent } from './story-drafter/story-drafter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoryFinalComponent } from './story-final/story-final.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MyDetailsComponent,
    MyWorkExperienceComponent,
    BitBlogComponent,
    StoryDrafterComponent,
    StoryFinalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
