import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeHeadsRoutingModule } from './fee-heads-routing.module';
import { FeeHeadsComponent } from './fee-heads.component';


@NgModule({
  declarations: [FeeHeadsComponent],
  imports: [
    CommonModule,
    FeeHeadsRoutingModule
  ]
})
export class FeeHeadsModule { }
