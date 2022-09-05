import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './sections/loader/loader.component';
import { ImageOverlaySectionComponent } from './sections/image-overlay-section/image-overlay-section.component';
import { SkillsDictionaryComponent } from './sections/skills-dictionary/skills-dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
    LoaderComponent,
    ImageOverlaySectionComponent,
    SkillsDictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavigationComponent,FooterComponent]
})
export class AppModule { }
