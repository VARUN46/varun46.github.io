import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { AboutAppComponent } from './about-app/about-app.component';


const routes: Routes = [{
  path:'',
  component:AppComponent,
  children:[
    {
      path:'technologies',
      component:TechnologiesListComponent
    },
    {
      path:'about',
      component: AboutAppComponent
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalDetailsRoutingModule { }
