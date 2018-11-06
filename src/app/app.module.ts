import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { ProductService } from './product/services/product.service';
import { CartComponent } from './cart/components/cart/cart.component';
import {CartService} from  './cart/services/cart.service';
import { CartElementComponent } from './cart/components/cart-element/cart-element.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CartElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
