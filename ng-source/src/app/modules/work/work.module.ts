import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MyDetailsComponent } from './components/my-details/my-details.component';
import { MyWorkExperienceComponent } from './components/my-work-experience/my-work-experience.component';

@NgModule({
  declarations: [HomeComponent,MyDetailsComponent,MyWorkExperienceComponent],
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  exports:[
    HomeComponent,
    MyDetailsComponent,
    MyWorkExperienceComponent
  ]
})
export class WorkModule { }
