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

    onIncreaseProductQuantity(product: CartProductModel): void {
        this.getCardProductByName(product.name).product.quantity++;
    }

    onReduceProductQuantity(product: CartProductModel): void {
        this.getCardProductByName(product.name).product.quantity--;
    }

    addProduct(product: ProductModel): void {
        const currentProduct = this.getCardProductByName(product.name).product;

        if (currentProduct) {
            currentProduct.quantity++;
        } else {
            this.cartProductList.push({
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
    }

    getCartProducts(): CartProductModel[] {
        return this.cartProductList;
    }

    getPurchasesSum(): number {
        return this.cartProductList.reduce((result, product) => {
            return result + product.quantity * product.price;
        }, 0);
    }

    getPurchasesQuantity(): number {
        return this.cartProductList.reduce((result, product) => {
            return result + product.quantity;
        }, 0);
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
