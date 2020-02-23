import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { FeeCollectingRoutingModule } from './fee-collecting-routing.module';
import { FeeCollectingComponent } from './fee-collecting.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';


@NgModule({
  declarations: [FeeCollectingComponent, FeeStructureComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeeCollectingRoutingModule,
  ]
})
export class FeeCollectingModule { }
