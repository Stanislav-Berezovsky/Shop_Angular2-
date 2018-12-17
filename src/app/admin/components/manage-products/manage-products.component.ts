import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductModel, ProductObservableService } from '../../../product';


@Component({
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
    productList$: Observable<ProductModel[]>;

    constructor(
        private productObservableService: ProductObservableService,
        private router: Router
    ) { }

    ngOnInit() {
        this.productList$ = this.productObservableService.getProducts();
    }

    onGoToProductView(productData: ProductModel): void {
        const link = ['/admin/products/', productData.id];
        this.router.navigate(link);
    }

    onEditProduct(productData: ProductModel): void {
        const link = ['admin/products/edit/', productData.id];
        this.router.navigate(link);
    }

    onCreateProduct() {
        const link = ['admin/products/add/'];
        this.router.navigate(link);
    }

    onDeleteProduct(productData: ProductModel) {
        this.productList$ = this.productObservableService.deleteProduct(productData);
    }
}