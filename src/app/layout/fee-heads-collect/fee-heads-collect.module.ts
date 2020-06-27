import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeHeadsCollectRoutingModule } from './fee-heads-collect-routing.module';
import { FeeHeadsCollectComponent } from './fee-heads-collect.component';
import { FormsModule } from '@angular/forms';
import { RecieptComponent } from '../reciept/reciept.component';


@NgModule({
  declarations: [FeeHeadsCollectComponent, RecieptComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeeHeadsCollectRoutingModule
  ]
})
export class FeeHeadsCollectModule { }
