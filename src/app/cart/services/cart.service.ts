import { Injectable } from '@angular/core';
import { ProductModel } from '../../product/components/product/product.component';
import { CartProductModel, CartProductList } from '../components/cart/cart.component';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartProductList: CartProductList = [];

    public constructor() {
    }

    onCleanUpCart(): void {
        this.cartProductList.length = 0;
    }

    onRemove(name: string): void {
        this.cartProductList.splice(this.getCardProductByName(name).index, 1);
    }

    onIncreaseProductCount(name: string): void {
        this.getCardProductByName(name).product.count++;
    }

    onReduceProductCount(name: string): void {
        this.getCardProductByName(name).product.count--;
    }

    addProduct(product: ProductModel): void {
        const currentProduct = this.getCardProductByName(product.name).product;

        if (currentProduct) {
            currentProduct.count++;
        } else {
            this.cartProductList.push({
                name: product.name,
                price: product.price,
                count: 1
            });
        }
    }

    getCartProducts(): CartProductList {
        return this.cartProductList;
    }

    private getCardProductByName(name: string): { product: CartProductModel, index: number } {
        return this.cartProductList.reduce((result, cartProduct, index) => {
            if (cartProduct.name === name) {
                result.product = cartProduct;
                result.index = index;
            }
            return result;
        }, {} as any);
    }
}
