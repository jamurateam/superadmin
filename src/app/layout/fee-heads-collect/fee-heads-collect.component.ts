import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-heads-collect',
  templateUrl: './fee-heads-collect.component.html',
  styleUrls: ['./fee-heads-collect.component.css']
})
export class FeeHeadsCollectComponent implements OnInit {
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
