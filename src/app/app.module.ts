import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponents } from './components/global-error/global-error.components'
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "./components/pipes/filter-products.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponents,
    FilterProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
