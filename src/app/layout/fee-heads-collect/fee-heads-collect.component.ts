import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { PaymentPending } from 'src/app/model/FeePattern';

@Component({
  selector: 'app-fee-heads-collect',
  templateUrl: './fee-heads-collect.component.html',
  styleUrls: ['./fee-heads-collect.component.css']
})
export class FeeHeadsCollectComponent implements OnInit {
  isCheque: boolean;
  public payment = {} as PaymentPending;
  isPaymentSearched: boolean;
  constructor(private apiService : DataService) { }


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
  onSearch() {
    this.apiService.getPendingPayment(this.payment.id).subscribe(data => {
      this.payment.amount = data.amount;
      this.isPaymentSearched = true;
    },
      error => {
        alert(error.error.text);
      });
  }

  onPayment() {
   console.log(this.payment);
    this.apiService.depositFee(this.payment).subscribe(data => {
    console.log(data);
    },
      error => {
        alert(error.error.text);
      });
  }

}
