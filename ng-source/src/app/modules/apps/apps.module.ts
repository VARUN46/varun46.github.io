import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { AppsLayoutComponent } from './apps-layout/apps-layout.component';
import { AppsHomeComponent } from './apps-home/apps-home.component';


@NgModule({
  declarations: [AppsLayoutComponent, AppsHomeComponent],
  imports: [
    CommonModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
