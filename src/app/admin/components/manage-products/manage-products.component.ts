import { Component, OnInit } from '@angular/core';
import * as RouterActions from './../../../core/+store/router/router.actions';

// rxjs
import { Observable } from 'rxjs';

import { ProductModel } from '../../../product';

import { Store, select } from '@ngrx/store';
import { AppState, getProductsData } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.css']
})

export class ManageProductsComponent implements OnInit {
    productList$: Observable<ProductModel[]>;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.productList$ = this.store.pipe(select(getProductsData));

        this.store.dispatch(new ProductsActions.GetProducts());
    }

    onEditProduct(productData: ProductModel): void {
        const link = ['admin/products/edit/', productData.id];

        this.store.dispatch(new RouterActions.Go({
            path: link
        }));
    }

    onCreateProduct() {
        const link = ['admin/products/add/'];

        this.store.dispatch(new RouterActions.Go({
            path: link
        }));
    }

    onDeleteProduct(productData: ProductModel) {
        this.store.dispatch(new ProductsActions.DeleteProduct(productData));
    }
}
