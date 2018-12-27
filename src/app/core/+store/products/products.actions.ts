import { Action } from '@ngrx/store';
import { ProductModel } from '../../../product';

export enum ProductsActionTypes {
    GET_PRODUCTS = '[Tasks] GET_TASKS',
    GET_PRODUCTS_SUCCESS = '[Tasks] GET_TASKS_SUCCESS',
    GET_PRODUCTS_ERROR = '[Tasks] GET_TASKS_ERROR',
}

export class GetProducts implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS_SUCCESS;
    constructor(public payload: ProductModel[]) { }
}

export class GetProductsError implements Action {
    readonly type = ProductsActionTypes.GET_PRODUCTS_ERROR;
    constructor(public payload: Error | string) { }
}

export type ProductsActions
  = GetProducts
  | GetProductsSuccess
  | GetProductsError;
