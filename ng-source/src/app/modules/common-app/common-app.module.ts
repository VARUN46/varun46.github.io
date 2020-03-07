import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [LoadingComponent,PageHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    PageHeaderComponent,
  ]
})
export class CommonAppModule { }
