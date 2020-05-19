import { ListFeePattern, ListBatches } from './../../../model/FeePattern';
import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admitstatus',
  templateUrl: './admitstatus.component.html',
  styleUrls: ['./admitstatus.component.css']
})
export class AdmitstatusComponent implements OnInit {

  public feePatternList = {} as ListFeePattern;
  public batchesList = {} as ListBatches;
  constructor(private apiService : DataService, public location : Location) { }

  ngOnInit() {
    this.getAllBatches()
    this.getAllFeePatterns();
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

}
