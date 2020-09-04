import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { AppzzComponent } from './appzz/appzz.component';

const routes: Routes = [
{ path:'appzz', component: AppzzComponent },
{ path:'story', loadChildren:() => import('./modules/storydrafter/storydrafter.module').then(m=>m.StorydrafterModule) },
{ path:'work', loadChildren:() => import('./modules/work/work.module').then(m=>m.WorkModule)  },
{ path:'',redirectTo:'work',pathMatch:'full' },
{ path:"**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),FormsModule,MatIconModule],
  exports: [RouterModule,FormsModule,MatIconModule]
})
export class AppRoutingModule { }
