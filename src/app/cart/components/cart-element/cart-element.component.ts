import { Component, OnInit, Input } from '@angular/core';
import { CartProductModel } from '../cart/cart.component';
import { CartService } from '../../services/cart.service'

@Component({
    selector: 'app-cart-element',
    templateUrl: './cart-element.component.html',
    styleUrls: ['./cart-element.component.css']
})
export class CartElementComponent implements OnInit {
    @Input() cartProduct: CartProductModel;

    public constructor(private cartService: CartService) { }

    ngOnInit() {
    }

    onRemove(name: string): void {
        this.cartService.onRemove(name);
    }

    onIncreaseProductCount(name: string): void {
        this.cartService.onIncreaseProductCount(name);
    }

    onReduceProductCount(name: string): void {
        this.cartService.onReduceProductCount(name);
    }
}
