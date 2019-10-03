import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Student } from './registration.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  employees: Student[];

  public student = {} as Student;
  constructor(private empService: DataService, private router: Router) {
  }

  ngOnInit() {
 
  }
  onSubmit(student: Student) {
    console.log('Create fire');
    console.log(student);
    this.empService.createUser(student)
      .subscribe(data => {
        console.log(data);
      },
        error => {
          alert(error);
        });
  }

  onGet(){
    student: Student;
    
    this.empService.get_products()
    .subscribe((data: Student[]) => {
      console.log(data);
      this.employees = data;
    });
  }
}
