import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';
import { CartElementComponent } from './components/cart-element/cart-element.component';
import { CartService } from './services/cart.service';


@NgModule({
    declarations: [
        CartComponent,
        CartElementComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [CartService],
    exports: [CartComponent]
})
export class CartModule { }
