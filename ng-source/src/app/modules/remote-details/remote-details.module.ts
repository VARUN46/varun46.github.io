import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteDetailsRoutingModule } from './remote-details-routing.module';
import { GithubItemListComponent } from './github-item-list/github-item-list.component';
import { GithubItemComponent } from './github-item/github-item.component';
import { CommonAppModule } from '../common-app/common-app.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [GithubItemListComponent, GithubItemComponent],
  imports: [
    CommonModule,
    CommonAppModule,
    RemoteDetailsRoutingModule,
    FontAwesomeModule
  ]
})
export class RemoteDetailsModule { }
