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

    getPurchasesSum(): number {
        return this.cartService.getPurchasesSum();
    }

    getPurchasesQuantity(): number {
        return this.cartService.getPurchasesQuantity();
    }

    ngOnInit(): void {
        this.cartProductList = this.cartService.getCartProducts();
    }

    onRemove(product: CartProductModel): void {
        this.cartService.onRemove(product);
    }

    onIncreaseProductQuantity(product: CartProductModel): void {
        this.cartService.onIncreaseProductQuantity(product);
    }

    onReduceProductQuantity(product: CartProductModel): void {
        this.cartService.onReduceProductQuantity(product);
    }

    onCleanUpCart(): void {
        this.cartService.onCleanUpCart();
    }
}
