import { Component, OnInit } from '@angular/core';
import * as RouterActions from './../../../core/+store/router/router.actions';

// rxjs
import { Observable } from 'rxjs';

import { ProductModel } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';

import { Store, select } from '@ngrx/store';
import { AppState, getProductsData } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productList$: Observable<Array<ProductModel>>;

    public constructor(
        private store: Store<AppState>,
        private cartService: CartService,
    ) { }

    ngOnInit() {
        this.productList$ = this.store.pipe(select(getProductsData));

        this.store.dispatch(new ProductsActions.GetProducts());
    }

    onBuy(productData: { selectedProduct: ProductModel, count: number }): void {
        this.cartService.addProduct(productData.selectedProduct, +productData.count || 0 /*write proper validation to number*/);
        console.log(`product was added to cart ${JSON.stringify(productData)}`);
    }

    onGoToProductView(productData: ProductModel): void {
        const link = ['products/', productData.id];

        this.store.dispatch(new RouterActions.Go({
            path: link
        }));
    }

    onGoToCart() {
        this.store.dispatch(new RouterActions.Go({
            path: ['/cart']
        }));
    }
}
