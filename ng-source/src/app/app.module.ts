import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalDetailsModule } from './modules/local-details/local-details.module';
import { RemoteDetailsModule } from './modules/remote-details/remote-details.module';
import { AboutAppDetailsModule } from './modules/about-app-details/about-app-details.module';
import { HomeComponent } from './components/home/home.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';
import { HomeListItemComponent } from './components/home-list-item/home-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Notfound404Component,
    HomeListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LocalDetailsModule,
    RemoteDetailsModule,
    AboutAppDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
