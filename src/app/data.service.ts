import { FeePattern, FeePatternHead, Batch } from './model/FeePattern';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './model/Student';

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
    return this.httpClient.get<Student[]>(this.baseUrl + '/studentregister/?search=' + id, { headers: this.httpHeaders })
  }
  createFeePattern(feePattern : FeePattern) {
    return this.httpClient.post(this.baseUrl + '/feepattern/fee', feePattern, { headers: this.httpHeaders });
  }
  createFeePatternHead(feePattern: FeePatternHead) {
    return this.httpClient.post(this.baseUrl + '/feepattern/feehead', feePattern, { headers: this.httpHeaders });
  }
  createBatch(feePattern: Batch) {
    return this.httpClient.post(this.baseUrl + '/academics/batch', feePattern, { headers: this.httpHeaders });
  }
}
