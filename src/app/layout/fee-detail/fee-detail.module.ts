import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeDetailRoutingModule } from './fee-detail-routing.module';
import { FeeDetailComponent } from './fee-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeeDetailComponent],
  imports: [
    CommonModule,
    FeeDetailRoutingModule,
    FormsModule
  ]
})
export class FeeDetailModule { }
