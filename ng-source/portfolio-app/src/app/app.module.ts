import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutWebsiteComponent } from './components/about-website/about-website.component';
import { TechnologyStackItemComponent } from './components/technology-stack-item/technology-stack-item.component';
import { GithubRepoItemComponent } from './components/github-repo-item/github-repo-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyLiveAppsComponent } from './components/my-live-apps/my-live-apps.component';
import { MyLiveAppsEntryComponent } from './utilities/my-live-apps-entry/my-live-apps-entry.component';
import { TechnologyStackItemsComponent } from './components/technology-stack-items/technology-stack-items.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PortfolioComponent,
    AboutWebsiteComponent,
    TechnologyStackItemComponent,
    GithubRepoItemComponent,
    NotFoundComponent,
    MyLiveAppsComponent,
    MyLiveAppsEntryComponent,
    TechnologyStackItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
