import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDetailsComponent } from './components/my-details/my-details.component';
import { MyWorkExperienceComponent } from './components/my-work-experience/my-work-experience.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


const routes: Routes = [  
{ path:'details', component:MyDetailsComponent },
{ path:'work', component:MyWorkExperienceComponent },
{ path:'', component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule, MatIconModule ],
  exports: [ RouterModule, MatButtonModule, MatIconModule ]
})
export class WorkRoutingModule { }