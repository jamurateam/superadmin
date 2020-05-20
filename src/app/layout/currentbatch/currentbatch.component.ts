import { DataService } from './../../data.service';
import { Batch } from './../../model/FeePattern';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentbatch',
  templateUrl: './currentbatch.component.html',
  styleUrls: ['./currentbatch.component.css']
})
export class CurrentbatchComponent implements OnInit {

  public feePattern = {} as Batch;
  constructor(private apiService : DataService) { }

  ngOnInit() {
  }
  
  onAdd() {
    console.log(this.feePattern);
    this.apiService.createBatch(this.feePattern).subscribe(data => {
      console.log(data);
      alert("done");
    },
      error => {
        alert(error.error.text);
      });
  }
}
