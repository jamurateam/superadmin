import { FeeHeadsCollectComponent } from './fee-heads-collect.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '' , component: FeeHeadsCollectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeHeadsCollectRoutingModule { }
