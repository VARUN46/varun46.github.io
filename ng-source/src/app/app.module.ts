import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './commons/components/navbar/navbar.component';
import { FooterComponent } from './commons/components/footer/footer.component';
import { LoaderComponent } from './commons/components/loader/loader.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './commons/components/core/profile-card/profile-card.component';
import { SkillsetComponent } from './pages/skillset/skillset.component';
import { DataListCardComponent } from './commons/components/core/data-list-card/data-list-card.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioItemCardComponent } from './commons/components/core/portfolio-item-card/portfolio-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    NotFoundComponent,
    ProfileCardComponent,
    SkillsetComponent,
    DataListCardComponent,
    PortfolioComponent,
    PortfolioItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,LoaderComponent,FooterComponent]
})
export class AppModule { }
