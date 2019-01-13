import { Component, OnInit } from '@angular/core';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { Subscription } from 'rxjs';

import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

import { Store, select } from '@ngrx/store';
import { AppState, getSelectedUserByUrl } from './../../../core/+store';
import { AutoUnsubscribe } from './../../../core/decorators';

@Component({
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
@AutoUnsubscribe('subscription')
export class ProductCardComponent implements OnInit {
    product: ProductModel;
    private sub: Subscription;

    constructor(
        private store: Store<AppState>,
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.sub = this.store
            .pipe(select(getSelectedUserByUrl))
            .subscribe(product => this.product = product);
    }

    onGoToHomePage() {
        this.store.dispatch(new RouterActions.Go({
            path: ['/products']
          }));
    }

    onBuy(product: ProductModel) {
        this.cartService.addProduct(product);
    }
}
