import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productList: Promise<ProductModel[]>;

    public constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

    ngOnInit() {
        this.productList = this.productService.getProducts();
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

    onAddNewProduct() {
        const link = ['products/add/'];
        this.router.navigate(link);
    }

    onGoToCart() {
        const link = ['cart'];
        this.router.navigate(link);
    }
}
