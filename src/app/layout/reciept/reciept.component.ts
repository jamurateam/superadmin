import { Component, OnInit, Input, Output } from '@angular/core';
import { PaymentPending, PaymentsResponse } from 'src/app/model/FeePattern';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent implements OnInit {
@Input() input: PaymentsResponse;
  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.input);
  }

  cancelWrap() {
    window.location.reload();
  }

}
