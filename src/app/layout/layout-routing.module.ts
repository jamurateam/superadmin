import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { RecieptComponent } from './reciept/reciept.component';


const routes: Routes = [ 
  {path: "", component: LayoutComponent,
  children: [
    { path: "admitStudent", loadChildren: "./admit-student/admit-student.module#AdmitStudentModule" },
    { path: "currentBatch", loadChildren: "./currentbatch/currentbatch.module#CurrentbatchModule" },
    { path: "feeCollection", loadChildren: "./fee-collecting/fee-collecting.module#FeeCollectingModule" },
    { path: "feeHeads", loadChildren: "./fee-heads/fee-heads.module#FeeHeadsModule" },
    { path: "feeHeadsCollect", loadChildren: "./fee-heads-collect/fee-heads-collect.module#FeeHeadsCollectModule" },
    { path: "feeDetails", loadChildren: "./fee-detail/fee-detail.module#FeeDetailModule" },
    { path: "feePatterns", loadChildren: "./fee-pattern/fee-pattern.module#FeePatternModule" },
    { path: "pdf", loadChildren: "./generate-pdf/generate-pdf.module#GeneratePdfModule" },
    { path: "reciept", component: RecieptComponent },
]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
