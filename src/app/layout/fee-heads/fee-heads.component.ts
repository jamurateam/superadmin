import { DataService } from './../../data.service';
import { CompanyDetails } from './../../model/FeePattern';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-heads',
  templateUrl: './fee-heads.component.html',
  styleUrls: ['./fee-heads.component.css']
})
export class FeeHeadsComponent implements OnInit {
  public companyDetails = {} as CompanyDetails;

  constructor(private apiService : DataService) { }

  ngOnInit() {
  }

  onAdd() {
    console.log(this.companyDetails);
    this.apiService.createCompany(this.companyDetails).subscribe(data => {
      console.log(data);
      alert("done");
    },
      error => {
        alert(error.error.text);
      });
  }



}
