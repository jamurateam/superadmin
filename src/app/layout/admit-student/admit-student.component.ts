import { Student } from './../../model/Student';

import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admit-student',
  templateUrl: './admit-student.component.html',
  styleUrls: ['./admit-student.component.css']
})
export class AdmitStudentComponent implements OnInit {

public studentData = {} as Student;
  constructor(private apiService: DataService) { }

  ngOnInit() {
  }

  onSearch() {
    if (this.studentData.id) {
      sessionStorage.setItem('id', JSON.stringify(this.studentData.id));
      this.apiService.getStudentDetailById(this.studentData.id).subscribe(data => {
        console.log(data);
        
        console.log(sessionStorage.getItem('id'));
        this.studentData = data;
      },
        error => {
          alert(error.error.text);
        });
    } else if (this.studentData.student_name) {
      this.apiService.getStudentDetailById(this.studentData.student_name).subscribe(data => {
        this.studentData = data;
      },
        error => {
          alert(error.error.text);
        });
    }
  }



}
