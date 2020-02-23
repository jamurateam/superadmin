import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmitStudentRoutingModule } from './admit-student-routing.module';
import { AdmitStudentComponent } from './admit-student.component';
import { AdmitstatusComponent } from './admitstatus/admitstatus.component';


@NgModule({
  declarations: [AdmitStudentComponent, AdmitstatusComponent],
  imports: [
    CommonModule,
    AdmitStudentRoutingModule,
    FormsModule
  ]
})
export class AdmitStudentModule { }
