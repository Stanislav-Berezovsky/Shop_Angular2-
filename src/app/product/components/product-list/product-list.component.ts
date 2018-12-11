import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductModel } from '../../models/product.model';
import { ProductObservableService } from '../../services';
import { CartService } from '../../../cart/services/cart.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productList$: Observable<ProductModel[]>;

    public constructor(
        private productObservableService: ProductObservableService,
        private cartService: CartService,
        private router: Router
    ) { }

    ngOnInit() {
        this.productList$ = this.productObservableService.getProducts();
    }

    onBuy(productData: { selectedProduct: ProductModel, count: number }): void {
        this.cartService.addProduct(productData.selectedProduct, +productData.count || 0 /*write proper validation to number*/);
        console.log(`product was added to cart ${JSON.stringify(productData)}`);
    }

    onGoToProductView(productData: ProductModel): void {
        const link = ['products/', productData.id];
        this.router.navigate(link);
    }

    onEditProduct(productData: ProductModel): void {
        const link = ['products/edit/', productData.id];
        this.router.navigate(link);
    }

    onCreateProduct() {
        const link = ['products/add/'];
        this.router.navigate(link);
    }

    onDeleteProduct(productData: ProductModel) {
        this.productList$ = this.productObservableService.deleteProduct(productData);
    }

    onGoToCart() {
        const link = ['cart'];
        this.router.navigate(link);
    }
}
