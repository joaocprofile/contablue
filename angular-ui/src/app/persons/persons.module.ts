import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { TreeSelectModule } from 'primeng/treeselect';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PersonTableComponent } from './person-table/person-table.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
  declarations: [
    PersonTableComponent,
    PersonSearchComponent,
    PersonFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    TreeSelectModule,
    SharedModule,
  ]
})
export class PersonsModule { }
