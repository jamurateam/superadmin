import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admitstatus',
  templateUrl: './admitstatus.component.html',
  styleUrls: ['./admitstatus.component.css']
})
export class AdmitstatusComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }


  goBack() {
    this.location.back();
  }

}
