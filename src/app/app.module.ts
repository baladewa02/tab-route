import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommandCenterMenu1Component } from './components/command-center-menu1/command-center-menu1.component';
import { CommandCenterMenu2Component } from './components/command-center-menu2/command-center-menu2.component';
import { CommonsModule } from './modules/commons/commons.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CommandCenterMenu1Component,
    CommandCenterMenu2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
