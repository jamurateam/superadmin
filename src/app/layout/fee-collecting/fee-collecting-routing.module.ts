import { FeeStructureComponent } from './fee-structure/fee-structure.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeCollectingComponent } from './fee-collecting.component';


const routes: Routes = [
  {
  path: '', component: FeeCollectingComponent
},
{
  path: 'feeStructure', component: FeeStructureComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeCollectingRoutingModule { }
