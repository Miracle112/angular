import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponents } from './components/global-error/global-error.components'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterProductsPipe} from "./components/pipes/filter-products.pipe";
import {ModalComponent} from './components/modal/modal.component';
import {CreateProductComponent} from "./components/create-product/create-product.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponents,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
