import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CompanyDetails, ComponentsDetails } from 'src/app/model/FeePattern';

@Component({
  selector: 'app-fee-detail',
  templateUrl: './fee-detail.component.html',
  styleUrls: ['./fee-detail.component.css']
})
export class FeeDetailComponent implements OnInit {

  public componentDetail = {} as ComponentsDetails;

  constructor(private apiService : DataService) { }

  ngOnInit() {
  }

  onAdd() {
    console.log(this.componentDetail);
    this.apiService.createCompany(this.componentDetail).subscribe(data => {
      console.log(data);
      alert("done");
    },
      error => {
        alert(error.error.text);
      });
  }



}
