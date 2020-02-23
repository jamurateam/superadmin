import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentbatchRoutingModule } from './currentbatch-routing.module';
import { CurrentbatchComponent } from './currentbatch.component';


@NgModule({
  declarations: [CurrentbatchComponent],
  imports: [
    CommonModule,
    CurrentbatchRoutingModule
  ]
})
export class CurrentbatchModule { }
