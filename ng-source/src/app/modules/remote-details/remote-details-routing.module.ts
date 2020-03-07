import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { GithubItemListComponent } from './github-item-list/github-item-list.component';


const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children: [
      {
        path:'github',
        component:GithubItemListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteDetailsRoutingModule { }
