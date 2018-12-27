import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

// Rxjs
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as ProductsActions from './products.actions';

import { ProductObservableService } from '../../../product/services/product-observable.service';

@Injectable()
export class ProductsEffects {

    constructor(
        private actions$: Actions,
        private productObservableService: ProductObservableService,
        private router: Router
    ) {
        console.log('[PRODUCT EFFECTS]');
    }

    @Effect()
    getProducts$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
        switchMap(action =>
            this.productObservableService
                .getProducts()
                .pipe(
                    map(products => new ProductsActions.GetProductsSuccess(products)),
                    catchError(err => of(new ProductsActions.GetProductsError(err)))
                )
        )
    );
}
