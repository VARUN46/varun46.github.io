import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyWorkExperienceComponent } from './my-work-experience/my-work-experience.component';
import { BitBlogComponent } from './bit-blog/bit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MyDetailsComponent,
    MyWorkExperienceComponent,
    BitBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
