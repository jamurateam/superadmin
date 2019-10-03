import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [ 
  {path: "", component: LayoutComponent,
  children: [
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "registration", loadChildren: "./registration/registration.module#RegistrationModule" },

]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
