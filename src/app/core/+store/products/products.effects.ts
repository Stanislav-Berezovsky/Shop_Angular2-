import { Injectable } from '@angular/core';
import * as RouterActions from './../router/router.actions';

import { Router } from '@angular/router';
import { ProductModel } from '../../../product';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

// Rxjs
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, concatMap, pluck } from 'rxjs/operators';
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

    @Effect()
    getProduct$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.GetProduct>(ProductsActions.ProductsActionTypes.GET_PRODUCT),
        pluck('payload'),
        switchMap((payload: number) =>
            this.productObservableService
                .getProduct(payload)
                .pipe(
                    map(product => new ProductsActions.GetProductSuccess(product)),
                    catchError(err => of(new ProductsActions.GetProductError(err)))
                )
        )
    );

    @Effect()
    updateProduct$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.UPDATE_PRODUCT),
        pluck('payload'),
        concatMap((payload: ProductModel) =>
            this.productObservableService
                .updateProduct(payload).pipe(
                    map(product => new ProductsActions.UpdateProductSuccess(product)),
                    catchError(err => of(new ProductsActions.UpdateProductError(err)))
                )
        )
    );

    @Effect()
    createProduct$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.CreateProduct>(ProductsActions.ProductsActionTypes.CREATE_PRODUCT),
        pluck('payload'),
        concatMap((payload: ProductModel) =>
            this.productObservableService.createProduct(payload).pipe(
                map(product => new ProductsActions.CreateProductSuccess(product)),
                catchError(err => of(new ProductsActions.CreateProductError(err)))
            )
        )
    );

    @Effect()
    createUpdateProductSuccess$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.CreateProduct | ProductsActions.UpdateProduct>(
            ProductsActions.ProductsActionTypes.CREATE_PRODUCT_SUCCESS,
            ProductsActions.ProductsActionTypes.UPDATE_PRODUCT_SUCCESS
        ),
        pluck('payload'),
        map((product: ProductModel) => {
            const path = ['/admin/products', { editedUserID: product.id }];
            return new RouterActions.Go({ path });
        })
    );

    @Effect()
    deleteUser$: Observable<Action> = this.actions$.pipe(
        ofType<ProductsActions.DeleteProduct>(ProductsActions.ProductsActionTypes.DELETE_PRODUCT),
        pluck('payload'),
        concatMap((payload: ProductModel) =>
            this.productObservableService.deleteProduct(payload).pipe(
                map(() => new ProductsActions.DeleteProductSuccess(payload)),
                catchError(err => of(new ProductsActions.DeleteProductError(err)))
            )
        )
    );
}
