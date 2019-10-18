import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TcmPage1Component } from './components/tcm-page1/tcm-page1.component';
import { TcmPage2Component } from './components/tcm-page2/tcm-page2.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tcm/page-1',
    pathMatch: 'full'
  },
  {
    path: 'page-1',
    component: TcmPage1Component
  },
  {
    path: 'page-2',
    component: TcmPage2Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TcmRoutingModule {
}
export const RouteComponents = [
  TcmPage1Component,
  TcmPage2Component
];
