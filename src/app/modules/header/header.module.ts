import { YellowHeaderComponent } from './../components/yellow-header/yellow-header.component';
import { BlueHeaderComponent } from './../components/blue-header/blue-header.component';
import { RedHeaderComponent } from './../components/red-header/red-header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlueHeaderComponent,
    RedHeaderComponent,
    YellowHeaderComponent
  ],
  exports: [
    BlueHeaderComponent,
    RedHeaderComponent,
    YellowHeaderComponent
  ]
})
export class HeaderModule { }