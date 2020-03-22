import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeHeadsComponent } from './fee-heads.component';


const routes: Routes = [
  {
  path: '', component: FeeHeadsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeHeadsRoutingModule { }
