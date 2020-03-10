import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AppsLayoutComponent } from './apps-layout/apps-layout.component';
import { AppsHomeComponent } from './apps-home/apps-home.component';
import { CommonAppModule } from '../common-app/common-app.module';
import { AppLauncherItemComponent } from './app-launcher-item/app-launcher-item.component';


@NgModule({
  declarations: [AppsLayoutComponent, AppsHomeComponent, AppLauncherItemComponent],
  imports: [
    CommonModule,
    AppsRoutingModule,
    CommonAppModule
  ]
})
export class AppsModule { }
