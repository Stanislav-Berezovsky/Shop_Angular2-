import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { pluck } from 'rxjs/operators';

import { ProductModel } from '../../models/product.model';
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
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.route.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
            this.product = {
                ...product
            };
        });
    }

    onGoToHomePage() {
        this.router.navigate(['']);
    }

    onBuy(product: ProductModel) {
        this.cartService.addProduct(product);
    }
}
