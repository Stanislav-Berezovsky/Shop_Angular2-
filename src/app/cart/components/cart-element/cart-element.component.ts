import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { CartProductModel } from '../../models/cart-product.model';

@Component({
    selector: 'app-cart-element',
    templateUrl: './cart-element.component.html',
    styleUrls: ['./cart-element.component.css']
})
export class CartElementComponent  {
    @Input() cartProduct: CartProductModel;

    @Output() removeProductFromCart: EventEmitter<CartProductModel> = new EventEmitter();
    @Output() increaseProductQuantity: EventEmitter<CartProductModel> = new EventEmitter();
    @Output() reduceProductQuantity: EventEmitter<CartProductModel> = new EventEmitter();

    public constructor() { }

    onRemove(product: CartProductModel): void {
        this.removeProductFromCart.emit(product);
    }

    onIncreaseProductQuantity(product: CartProductModel): void {
        this.increaseProductQuantity.emit(product);
    }

    onReduceProductQuantity(product: CartProductModel): void {
        this.reduceProductQuantity.emit(product);
    }
}
