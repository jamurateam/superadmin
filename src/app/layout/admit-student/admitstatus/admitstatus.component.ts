import { ListFeePattern, ListBatches } from './../../../model/FeePattern';
import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-admitstatus',
  templateUrl: './admitstatus.component.html',
  styleUrls: ['./admitstatus.component.css']
})
export class AdmitstatusComponent implements OnInit {

  public feePatternList = {} as ListFeePattern;
  public batchesList = {} as ListBatches;
  public admitDetails = {} as Student;
  id: string;
  constructor(private apiService : DataService, public location : Location) { }

  ngOnInit() {
    this.getAllBatches()
    this.getAllFeePatterns();
    this.id = JSON.parse(sessionStorage.getItem('id'));
  }
  
  goBack() {
    this.location.back();
  }

  getAllFeePatterns() {
    this.apiService.getAllFeePatterns().subscribe(data => {
      console.log(data);
      this.feePatternList = data;
      console.log(this.feePatternList);
    },
      error => {
        alert(error.error.text);
      });
  }

  getAllBatches() {
    this.apiService.getAllBatches().subscribe(data => {
      console.log(data);
      this.batchesList = data;
      console.log(this.feePatternList);
    },
      error => {
        alert(error.error.text);
      });
  }

  saveBatch() {
    this.apiService.AdmitStudent(this.admitDetails , this.id).subscribe(data => {
      console.log(data);
      alert("student admited");
    },
      error => {
        alert(error.error.text);
      });
  }



  
}
