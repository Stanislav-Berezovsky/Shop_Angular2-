import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productList: Promise<ProductModel[]>;

    public constructor(private productService: ProductService, private cartService: CartService) { }

    ngOnInit() {
        this.productList = this.productService.getProducts();
    }

    onBuy(productData: { selectedProduct: ProductModel, count: number}): void {
        this.cartService.addProduct(productData.selectedProduct, +productData.count || 0 /*write proper validation to number*/);
        console.log(`product was added to cart ${JSON.stringify(productData)}`);
    }
}
