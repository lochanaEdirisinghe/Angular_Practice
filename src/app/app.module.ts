import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerOneComponent } from './views/customer-one/customer-one.component';
import { CustomerTwoComponent } from './views/customer-two/customer-two.component';
import { CustomerThreeComponent } from './views/customer-three/customer-three.component';
import { CustomerFourComponent } from './views/customer-four/customer-four.component';
import { CustomerFiveComponent } from './views/customer-five/customer-five.component';
import { CustomerSixComponent } from './views/customer-six/customer-six.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CustomerOneComponent,
    CustomerTwoComponent,
    CustomerThreeComponent,
    CustomerFourComponent,
    CustomerFiveComponent,
    CustomerSixComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
