import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [ 
  {path: "", component: LayoutComponent,
  children: [
    { path: "admitStudent", loadChildren: "./admit-student/admit-student.module#AdmitStudentModule" },
    { path: "currentBatch", loadChildren: "./currentbatch/currentbatch.module#CurrentbatchModule" },
    { path: "feeCollection", loadChildren: "./fee-collecting/fee-collecting.module#FeeCollectingModule" },
]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
