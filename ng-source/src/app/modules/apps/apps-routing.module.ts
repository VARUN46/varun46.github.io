import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsLayoutComponent } from './apps-layout/apps-layout.component';
import { AppsHomeComponent } from './apps-home/apps-home.component';


const routes: Routes = [
  {
    path:'',
    component:AppsLayoutComponent,
    children:[
      {
        path:'',
        component:AppsHomeComponent
      },
      {
        path: 'notes',
        loadChildren: () => import('./notes-taking-app/notes-taking-app.module')
                              .then(m => m.NotesTakingAppModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
