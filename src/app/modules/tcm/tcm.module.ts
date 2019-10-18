import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcmRoutingModule, RouteComponents } from './tcm-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TcmRoutingModule
  ],
  declarations: [
    RouteComponents
  ]
})
export class TcmModule { }
