import { GuardGuard } from './Guard/guard.guard';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [GuardGuard]
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'registration', loadChildren: './registration/registration.module#RegistrationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
