import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>('products');


export const getProductsData = createSelector(getProductsState, (state: ProductsState) =>
    state.data);
