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
    productList: ProductModel[];

    public constructor(private productService: ProductService, private cartService: CartService) { }

    ngOnInit() {
        this.productList = this.productService.getAllProducts();
    }

    onBuy(selectedProduct: ProductModel): void {
        this.cartService.addProduct(selectedProduct);
        console.log(`product was added to cart ${JSON.stringify(selectedProduct)}`);
    }
}
