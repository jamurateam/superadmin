import { Student } from './../Student';
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
      console.log(this.studentData.id);
      this.apiService.getStudentDetailById(this.studentData.id).subscribe(data => {
        console.log("id");
        console.log(data);
      },
        error => {
          alert(error.error.text);
        });
    } else if (this.studentData.student_name) {
      console.log(this.studentData.student_name);
      this.apiService.getStudentDetailByName(this.studentData.student_name).subscribe(data => {
        console.log("name");
        console.log(data);
      },
        error => {
          alert(error.error.text);
        });
    }
  }



}
