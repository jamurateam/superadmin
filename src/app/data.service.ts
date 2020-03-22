import { Student } from './layout/Student';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  constructor(private httpClient: HttpClient) { }

  get_products() {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }
  createUser(employee: Student) {
    return this.httpClient.post(this.baseUrl + '/studentregister/reg', employee, { headers: this.httpHeaders });
  }
  getStudentDetailById(id): Observable<any> {
    return this.httpClient.get<Student[]>(this.baseUrl + '/studentregister/reg?id=' + id, { headers: this.httpHeaders })
  }
  getStudentDetailByName(name): Observable<any> {
    return this.httpClient.get<Student[]>(this.baseUrl + '/studentregister/reg?name=' + name, { headers: this.httpHeaders })
  }
}
