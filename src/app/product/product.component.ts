import { Component, OnInit, Input } from '@angular/core';

export enum ProductCategoryEnum{
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
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    @Input() product: ProductModel;

    public constructor() { }

    onMovetoBasket(selectedProduct: ProductModel): void {
        alert(`product was added to basket ${JSON.stringify(selectedProduct)}`);
    }

    ngOnInit() {
    }
}
