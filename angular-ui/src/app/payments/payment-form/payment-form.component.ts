import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  defaultType: string = 'RECEITA'

  types = [
    { label: "Receita", value: "RECEITA" },
    { label: "Despesa", value: "DESPESA" }
  ]
  categories = [
    { label: "Alimentação", value: 1 },
    { label: "Transporte", value: 2 }
  ]

  persons = [
    { label: 'João Carvalho', value: 1 },
    { label: 'Josy Carvalho', value: 2 },
    { label: 'Noyla de Lara', value: 3 },
    { label: 'Miriele Martins', value: 4 },
  ]

  constructor() { }

  save(form: NgForm) {

  }

  ngOnInit(): void {
  }

}
