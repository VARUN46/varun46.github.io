import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalDetailsRoutingModule } from './local-details-routing.module';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { TechnologiesListItemComponent } from './technologies-list-item/technologies-list-item.component';
import { CommonAppModule } from '../common-app/common-app.module';
import { AboutAppComponent } from './about-app/about-app.component';


@NgModule({
  declarations: [TechnologiesListComponent, TechnologiesListItemComponent, AboutAppComponent],
  imports: [
    CommonModule,
    CommonAppModule,
    LocalDetailsRoutingModule,    
  ]
})
export class LocalDetailsModule { }
