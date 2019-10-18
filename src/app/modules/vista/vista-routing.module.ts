import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VistaPage1Component } from './components/vista-page1/vista-page1.component';
import { VistaPage2Component } from './components/vista-page2/vista-page2.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/vista/page-1',
    pathMatch: 'full'
  },
  {
    path: 'page-1',
    component: VistaPage1Component
  },
  {
    path: 'page-2/:pageId',
    component: VistaPage2Component
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
export class VistaRoutingModule {
}
export const RouteComponents = [
  VistaPage1Component,
  VistaPage2Component
];
