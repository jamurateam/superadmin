import { Student } from './../model/Student';

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public student = {} as Student;
  constructor(private apiService : DataService) { }

  ngOnInit() {
  }
  onSubmit(data: Student) {
    this.apiService.createUser(data).subscribe(data => {
      alert('You Successfully registered and your registration id is ' + data.id);
      console.log(data);
    },
      error => {
        alert(error.error.text);
      });
  }
 
}
 