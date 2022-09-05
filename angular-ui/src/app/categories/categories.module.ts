import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { CategoryTableComponent } from './category-table/category-table.component';



@NgModule({
  declarations: [
    CategoryFormComponent,
    CategorySearchComponent,
    CategoryTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
