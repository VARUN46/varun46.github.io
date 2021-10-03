import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SkillsetComponent } from './pages/skillset/skillset.component';

const routes: Routes = [{
  path:'',component:HomeComponent,pathMatch:'full',
},
{
  path:'skillset',component:SkillsetComponent,
},
{
  path:'**',component:NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
