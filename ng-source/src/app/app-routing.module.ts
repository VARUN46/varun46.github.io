import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyWorkExperienceComponent } from './my-work-experience/my-work-experience.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{ path:'details', component:MyDetailsComponent },
{ path:'work', component:MyWorkExperienceComponent },
{ path:'story', loadChildren:() => import('./modules/storydrafter/storydrafter.module')
                                                                            .then(m=>m.StorydrafterModule) },
{ path:'', component:HomeComponent, pathMatch:'full' },
{ path:"**", component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
