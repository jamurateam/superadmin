import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {path: "", component: LayoutComponent,
  children: [

    { path: "createCompany", loadChildren: "./fee-heads/fee-heads.module#FeeHeadsModule" },
    { path: "assignComponent", loadChildren: "./fee-heads-collect/fee-heads-collect.module#FeeHeadsCollectModule" },
     { path: "createComponents", loadChildren: "./fee-detail/fee-detail.module#FeeDetailModule" },

]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
