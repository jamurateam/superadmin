import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeePatternRoutingModule } from './fee-pattern-routing.module';
import { FeePatternComponent } from './fee-pattern.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeePatternComponent],
  imports: [
    CommonModule,
    FeePatternRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FeePatternModule { }
