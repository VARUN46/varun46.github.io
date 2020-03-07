import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';


const routes: Routes = [{
  path:'',
  component:AppComponent,
  children:[
    {
      path:'technologies',
      component:TechnologiesListComponent
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalDetailsRoutingModule { }
