import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    @Input() product: ProductModel;

    @Output() buyProduct: EventEmitter<ProductModel> = new EventEmitter();

    public constructor() { }

    onBuy(selectedProduct: ProductModel): void {
        console.log('trigger "ProductListComponent.onBuy"');
        this.buyProduct.emit(selectedProduct);
    }

    ngOnInit() {
    }
}
