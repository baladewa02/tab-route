import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaRoutingModule, RouteComponents} from './vista-routing.module';


@NgModule({
  imports: [
    CommonModule,
    VistaRoutingModule
  ],
  declarations: [
    RouteComponents
  ]
})
export class VistaModule { }
