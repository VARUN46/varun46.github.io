import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutWebsiteComponent } from './components/about-website/about-website.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TechnologyStackItemsComponent } from './components/technology-stack-items/technology-stack-items.component';
import { MyLiveAppsComponent } from './components/my-live-apps/my-live-apps.component';

const routes: Routes = [

  { path : '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'mytech', component: TechnologyStackItemsComponent},
  { path: 'apps', component: MyLiveAppsComponent},
  { path: 'aboutwebsite', component: AboutWebsiteComponent },
  { path: 'about', component: AboutWebsiteComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
