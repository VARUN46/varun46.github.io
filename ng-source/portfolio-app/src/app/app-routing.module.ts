import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutWebsiteComponent } from './components/about-website/about-website.component';
const routes: Routes = [
  { path : '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'aboutwebsite', component: AboutWebsiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
