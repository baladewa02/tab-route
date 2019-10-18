import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandCenterMenu1Component } from './components/command-center-menu1/command-center-menu1.component';
import { CommandCenterMenu2Component } from './components/command-center-menu2/command-center-menu2.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'command-center-page-1', component: CommandCenterMenu1Component},
  {path: 'command-center-page-2', component: CommandCenterMenu2Component},
  {path: 'vista', loadChildren: './modules/vista/vista.module#VistaModule'},
  {path: 'tcm', loadChildren: './modules/tcm/tcm.module#TcmModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
