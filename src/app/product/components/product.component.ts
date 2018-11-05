import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart/services/cart.service';

export enum ProductCategoryEnum {
    Chocolate = 'Chocolate',
    Fish = 'Fish',
    Tabacco = 'Tabacco'
}

export interface ProductModel {
    name: string;
    description: string;
    price: number;
    category: ProductCategoryEnum
    isAvailable: boolean;
}

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    providers: [CartService]
})
export class ProductComponent implements OnInit {
    @Input() product: ProductModel;

    public constructor(private cartService: CartService) { }

    onMovetoCart(selectedProduct: ProductModel): void {
        this.cartService.addProduct(selectedProduct);
        alert(`product was added to basket ${JSON.stringify(selectedProduct)}`);
    }

    ngOnInit() {
    }
}
