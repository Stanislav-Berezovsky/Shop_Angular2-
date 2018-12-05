import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';


@Component({
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    product: ProductModel;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productService: ProductService,
        private cartService: CartService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('productId');
        this.product = this.productService.getProductById(id);
    }

    onGoToHomePage() {
        this.router.navigate(['']);
    }

    onBuy(product: ProductModel) {
        this.cartService.addProduct(product);
    }
}
