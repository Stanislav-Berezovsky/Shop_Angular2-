import { Component, EventEmitter, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ProductModel } from '../../models/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
    @Input() product: ProductModel;

    @Output() editProduct: EventEmitter<ProductModel> = new EventEmitter();
    @Output() deleteProduct: EventEmitter<ProductModel> = new EventEmitter();
    @Output() buyProduct: EventEmitter<{ selectedProduct: ProductModel, count: number }> = new EventEmitter();
    @Output() viewProduct: EventEmitter<ProductModel> = new EventEmitter();
    public constructor() { }

    onBuy(selectedProduct: ProductModel, count: number): void {
        console.log('trigger "ProductListComponent.onBuy"');
        this.buyProduct.emit({ selectedProduct, count });
    }

    onEdit(selectedProduct: ProductModel) {
        this.editProduct.emit(selectedProduct);
    }

    onDelete(selectedProduct: ProductModel){
        this.deleteProduct.emit(selectedProduct);
    }

    onGoToProductView(selectedProduct: ProductModel): void {
        this.viewProduct.emit(selectedProduct);
    }
}
