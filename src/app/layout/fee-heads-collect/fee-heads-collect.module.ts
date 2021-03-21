import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeHeadsCollectRoutingModule } from './fee-heads-collect-routing.module';
import { FeeHeadsCollectComponent } from './fee-heads-collect.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeeHeadsCollectComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeeHeadsCollectRoutingModule
  ]
})
export class FeeHeadsCollectModule { }
