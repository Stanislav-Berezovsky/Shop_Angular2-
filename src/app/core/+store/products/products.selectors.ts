import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModel, Product } from '../../../product/models';
import { ProductsState } from './products.state';
import { getRouterState } from './../router';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getProductsData = createSelector(getProductsState, (state: ProductsState) =>
    state.data);

export const getSelectedUserByUrl = createSelector(
    getProductsData,
    getRouterState,
    (products, router): ProductModel => {
        const productId = router.state.params.productId;
        if (productId) {
            return products.find(task => task.id === +productId);
        } else {
            return new Product();
        }
    });
