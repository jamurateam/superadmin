import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RegistrationRoutingModule,
    FormsModule
  ]
})
export class RegistrationModule { }


export class Student {
  id: number;
  name: string;
  fatherName: string;
  dob?: any;
  motherName: string;
  role: string;
  gender: string;
  nationality: string;
  domicile: string;
  bloodGroup: string;
  email: string;
  parentsEmail: string;
  phoneNo: number;
  fathersPhoneNo: number;
  aadharNo: string;
  coAddressLine1: string;
  coAddressLine2: string;
  coCity: string;
  coDistrict: string;
  coState: string;
  coCountry: string;
  coZIP: string;
  parAddressLine1: string;
  parAddressLine2: string;
  parCity: string;
  parDistrict: string;
  parState: string;
  parCountry: string;
  parZIP: number;
  course: string;
  photo: string;
  stream: string;
}
