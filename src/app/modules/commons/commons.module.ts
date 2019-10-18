import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import { RouterTabsComponent } from './components/router-tabs/router-tabs.component';
import { RouterTabsService } from './services/router-tabs.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [SharedComponent, RouterTabsComponent],
  providers: [
    RouterTabsService
  ],
  exports: [SharedComponent, RouterTabsComponent,
     MatTabsModule, MatToolbarModule, BrowserAnimationsModule]
})
export class CommonsModule { }
