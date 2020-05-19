import { DataService } from './../../data.service';
import { FeePatternHead, ListFeePattern } from './../../model/FeePattern';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-heads',
  templateUrl: './fee-heads.component.html',
  styleUrls: ['./fee-heads.component.css']
})
export class FeeHeadsComponent implements OnInit {
  public feePatternHead = {} as FeePatternHead;
  public feePatternList = {} as ListFeePattern;
  constructor(private apiService : DataService) { }

  ngOnInit() {
    this.getAllFeePatterns();
  }
  onAdd() {
    console.log(this.feePatternHead);
    this.apiService.createFeePatternHead(this.feePatternHead).subscribe(data => {
      console.log(data);
    },
      error => {
        alert(error.error.text);
      });
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

  
}
