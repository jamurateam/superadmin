import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeDetailRoutingModule } from './fee-detail-routing.module';
import { FeeDetailComponent } from './fee-detail.component';


@NgModule({
  declarations: [FeeDetailComponent],
  imports: [
    CommonModule,
    FeeDetailRoutingModule
  ]
})
export class FeeDetailModule { }
