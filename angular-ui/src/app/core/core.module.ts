import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,

    PanelMenuModule,
    SidebarModule,
    ButtonModule,
  ],
  exports: [
    NavBarComponent,
  ]
})
export class CoreModule { }
