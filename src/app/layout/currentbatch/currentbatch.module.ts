import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentbatchRoutingModule } from './currentbatch-routing.module';
import { CurrentbatchComponent } from './currentbatch.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CurrentbatchComponent],
  imports: [
    CommonModule,
    FormsModule,
    CurrentbatchRoutingModule
  ]
})
export class CurrentbatchModule { }
