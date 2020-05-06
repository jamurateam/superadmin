import { DataService } from './../../data.service';
import { FeePatternHead } from './../../model/FeePattern';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-heads',
  templateUrl: './fee-heads.component.html',
  styleUrls: ['./fee-heads.component.css']
})
export class FeeHeadsComponent implements OnInit {
  public feePatternHead = {} as FeePatternHead;
  constructor(private apiService : DataService) { }

  ngOnInit() {
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

  
}
