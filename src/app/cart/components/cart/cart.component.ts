import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProductModel } from '../../models/cart-product.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cartProductList: CartProductModel[] = [];

    public constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartProductList = this.cartService.getCartProducts();
    }

    onRemove(product: CartProductModel): void {
        this.cartService.onRemove(product);
    }

    onIncreaseProductCount(product: CartProductModel): void {
        this.cartService.onIncreaseProductCount(product);
    }

    onReduceProductCount(product: CartProductModel): void {
        this.cartService.onReduceProductCount(product);
    }

    onCleanUpCart(): void {
        this.cartService.onCleanUpCart();
    }
}
