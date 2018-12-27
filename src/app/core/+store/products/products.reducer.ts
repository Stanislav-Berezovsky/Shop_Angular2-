import { initialProductsState, ProductsState } from './products.state';
import { ProductsActionTypes, ProductsActions } from './products.actions';
import { ProductModel } from '../../../product';


export function productsReducer(state = initialProductsState, action: ProductsActions): ProductsState {
    console.log(`Reducer: Action came in! ${action.type}`);

    switch (action.type) {
        case ProductsActionTypes.GET_PRODUCTS: {
            console.log('GET_PRODUCTS action being handled!');

            return {
                ...state,
                loading: true
            };
        }

        case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
            console.log('GET_PRODUCTS_SUCCESS action being handled!');
            const data = [...<Array<ProductModel>>action.payload];
            return {
                ...state,
                data,
                loading: false,
                loaded: true
            };
        }

        case ProductsActionTypes.GET_PRODUCTS_ERROR: {
            console.log('GET_PRODUCTS_ERROR action being handled!');
            const error = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            };
        }

        default: {
            console.log('UNKNOWN_USER action being handled!');
            return state;
        }
    }
}
