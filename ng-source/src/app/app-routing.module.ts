import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkillsetComponent } from './pages/skillset/skillset.component';
import { environment } from '../environments/environment';

const routes: Routes = [{
  path:'',component:HomeComponent,pathMatch:'full',
},
{
  path:'skillset',component:SkillsetComponent,
},
{
  path:'portfolio',component:PortfolioComponent,
},
{
  path:'**',component:NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:environment.production})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
