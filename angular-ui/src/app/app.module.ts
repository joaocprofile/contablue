import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PaymentsModule } from './payments/payments.module';
import { PersonsModule } from './persons/persons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    CoreModule,
    PaymentsModule,
    PersonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
