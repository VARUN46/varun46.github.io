import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
        {
          path:'',
          component:AppComponent
        }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesTakingAppRoutingModule { }
