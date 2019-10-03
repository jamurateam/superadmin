import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './layout/registration/registration.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "http://vuniapi.herokuapp.com/users/";

  constructor(private httpClient : HttpClient) { }
 
  get_products(){
    return this.httpClient.get<Student[]>(this.baseUrl);
}
createUser(employee: Student) {  
  return this.httpClient.post(this.baseUrl, employee);  
}
}
