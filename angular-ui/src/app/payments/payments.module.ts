import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeSelectModule } from 'primeng/treeselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

import { PaymentTableComponent } from './payment-table/payment-table.component';
import { PaymentSearchComponent } from './payment-search/payment-search.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PaymentTableComponent,
    PaymentSearchComponent,
    PaymentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    TreeSelectModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,

    SharedModule,
  ],
  exports: [
    PaymentSearchComponent,
    PaymentFormComponent
  ]
})
export class PaymentsModule { }
