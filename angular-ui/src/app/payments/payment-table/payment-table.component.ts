import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent implements OnInit {

  @Input('data') payments: Payment[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
