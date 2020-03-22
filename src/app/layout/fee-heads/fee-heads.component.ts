import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-heads',
  templateUrl: './fee-heads.component.html',
  styleUrls: ['./fee-heads.component.css']
})
export class FeeHeadsComponent implements OnInit {
  isCheque: boolean;
  constructor() { }

  ngOnInit() {
  }
  paymentMethod(value) {
    switch(value) {
      case "cash" :
      this.isCheque = false;
      break;

      case "cheque" :
       this.isCheque = true;
        break;
    }
  }
}
