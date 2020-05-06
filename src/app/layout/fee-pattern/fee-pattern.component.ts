import { FeePattern } from './../../model/FeePattern';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-pattern',
  templateUrl: './fee-pattern.component.html',
  styleUrls: ['./fee-pattern.component.css'],
  providers: [DataService]
})
export class FeePatternComponent implements OnInit {
  public feePattern = {} as FeePattern;
  constructor(private apiService : DataService) { }

  ngOnInit() {
  }
  onAdd() {
    console.log(this.feePattern);
    this.apiService.createFeePattern(this.feePattern).subscribe(data => {
      console.log(data);
    },
      error => {
        alert(error.error.text);
      });
  }

}
