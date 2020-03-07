import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalDetailsRoutingModule } from './local-details-routing.module';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { TechnologiesListItemComponent } from './technologies-list-item/technologies-list-item.component';
import { CommonAppModule } from '../common-app/common-app.module';


@NgModule({
  declarations: [TechnologiesListComponent, TechnologiesListItemComponent],
  imports: [
    CommonModule,
    CommonAppModule,
    LocalDetailsRoutingModule,    
  ]
})
export class LocalDetailsModule { }
