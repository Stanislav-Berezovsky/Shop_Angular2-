import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

export interface CartProductModel {
    name: string;
    price: number;
    count: number;
}

export type CartProductList = CartProductModel[];

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cartProductList: CartProductList = [];

    public constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartProductList = this.cartService.getCartProducts();
    }

    onCleanUpCart(): void {
        this.cartService.onCleanUpCart();
    }
}
