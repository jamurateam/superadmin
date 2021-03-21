import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './model/Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "http://jamuraback.herokuapp.com/api/";
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  constructor(private httpClient: HttpClient) { }


  get_company() {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }
  get_components() {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  createCompany(details: any) {
    return this.httpClient.post<Student>(this.baseUrl + 'studentregister/reg', details, { headers: this.httpHeaders});
  }

}
