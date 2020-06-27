import { FeePattern, FeePatternHead, Batch, ListFeePattern, ListBatches, PaymentPending, PaymentsResponse } from './model/FeePattern';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './model/Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "https://vuni.herokuapp.com";
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  constructor(private httpClient: HttpClient) { }


  get_products() {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }
  createUser(employee: Student) {
    return this.httpClient.post<Student>(this.baseUrl + '/studentregister/reg', employee, { headers: this.httpHeaders});
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
  getAllFeePatterns() {
    return this.httpClient.get<ListFeePattern>(this.baseUrl + '/feepattern/getfee',{ headers: this.httpHeaders });
  }
  getAllBatches() {
    return this.httpClient.get<ListBatches>(this.baseUrl + '/academics/getbatch',{ headers: this.httpHeaders });
  }

  getPendingPayment(id: number): Observable<any> {
    return this.httpClient.get<PaymentPending>(this.baseUrl + '/feepattern/studentsFeeDetails?id=' + id, { headers: this.httpHeaders })
  }

  depositFee(fee: PaymentPending) {
    return this.httpClient.post<PaymentsResponse>(this.baseUrl + '/feepattern/feepay', fee, { headers: this.httpHeaders });
  }
  AdmitStudent(admitStudent: Student , id: string) {
    return this.httpClient.post<Student>(this.baseUrl + '/studentregister/put?id=' + id , admitStudent, { headers: this.httpHeaders });
  }




  reciptFeePost(fee: PaymentPending) {
    return this.httpClient.post(this.baseUrl + '/feeRecipt/fee', fee, { headers: this.httpHeaders });
  }

}
