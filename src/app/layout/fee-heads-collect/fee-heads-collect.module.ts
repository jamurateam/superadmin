import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeHeadsCollectRoutingModule } from './fee-heads-collect-routing.module';
import { FeeHeadsCollectComponent } from './fee-heads-collect.component';


@NgModule({
  declarations: [FeeHeadsCollectComponent],
  imports: [
    CommonModule,
    FeeHeadsCollectRoutingModule
  ]
})
export class FeeHeadsCollectModule { }
