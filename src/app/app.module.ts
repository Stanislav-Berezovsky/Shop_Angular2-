import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/components/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product/services/product.service';
import { CartComponent } from './cart/components/cart.component';
import {CartService} from  './cart/services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
