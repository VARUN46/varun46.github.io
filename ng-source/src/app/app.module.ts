import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfoModule } from 'src/modules/info/info.module';

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
    DataListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,LoaderComponent,FooterComponent]
})
export class AppModule { }
