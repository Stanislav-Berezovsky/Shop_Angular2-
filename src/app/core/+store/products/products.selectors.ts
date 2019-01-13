import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModel, Product } from '../../../product/models';
import { ProductsState } from './products.state';
import { getRouterState } from './../router';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getProductsData = createSelector(getProductsState, (state: ProductsState) =>
    state.data);

export const getProductsError = createSelector(getProductsState, (state: ProductsState) =>
    state.error);

export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) =>
    state.loaded);

export const getSelectedUserByUrl = createSelector(
    getProductsData,
    getRouterState,
    (products, router): ProductModel => {
        const productId = router.state.params.productId;
        if (productId) {
            return products.find(product => product.id === +productId);
        } else {
            return new Product();
        }
    });
