import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';


const routes: Routes = [
  {
    path:'local',
    loadChildren: () => import('./modules/local-details/local-details.module')
                    .then(m => m.LocalDetailsModule)
  },
  {
    path:'remote',
    loadChildren: () => import('./modules/remote-details/remote-details.module')
                      .then(m => m.RemoteDetailsModule)
  },
  {
    path:'apps',
    loadChildren: () => import('./modules/apps/apps.module')
                        .then(m => m.AppsModule)
  },
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent  
  },
  {
    path:'**',
    component:Notfound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
