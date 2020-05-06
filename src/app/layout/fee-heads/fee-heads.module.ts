import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeHeadsRoutingModule } from './fee-heads-routing.module';
import { FeeHeadsComponent } from './fee-heads.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeeHeadsComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeeHeadsRoutingModule
  ]
})
export class FeeHeadsModule { }
