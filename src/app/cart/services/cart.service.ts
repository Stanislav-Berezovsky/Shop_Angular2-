import { Injectable } from '@angular/core';
import { ProductModel } from '../../product/models/product.model';
import { CartProductModel } from '../models/cart-product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartProductList: CartProductModel[] = [];

    public constructor() {
    }

    onCleanUpCart(): void {
        this.cartProductList.length = 0;
    }

    onRemove(product: CartProductModel): void {
        this.cartProductList.splice(this.getCardProductByName(product.name).index, 1);
    }

    onIncreaseProductCount(product: CartProductModel): void {
        this.getCardProductByName(product.name).product.count++;
    }

    onReduceProductCount(product: CartProductModel): void {
        this.getCardProductByName(product.name).product.count--;
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

    getCartProducts(): CartProductModel[] {
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
