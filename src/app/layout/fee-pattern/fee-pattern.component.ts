import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-pattern',
  templateUrl: './fee-pattern.component.html',
  styleUrls: ['./fee-pattern.component.css'],
  providers: [DataService]
})
export class FeePatternComponent implements OnInit {
movies = [{title : 'test'}]
  constructor(private api: DataService) { 
 
  }

  ngOnInit() {
    console.log("hello");
  }

}
