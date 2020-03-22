import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeePatternRoutingModule } from './fee-pattern-routing.module';
import { FeePatternComponent } from './fee-pattern.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FeePatternComponent],
  imports: [
    CommonModule,
    FeePatternRoutingModule,
    HttpClientModule
  ]
})
export class FeePatternModule { }
