import { Injectable } from '@angular/core';
import { ProductModel } from '../../product/models/product.model';
import { CartProductModel, CartProduct } from '../models/cart-product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartProductList: CartProductModel[] = [];
    private cartProducstQuantity: number;
    private cartProducstPrice: number;

    public constructor() {
    }

    onCleanUpCart(): void {
        this.cartProductList.length = 0;
        this.setPurchasesQuantityAndPrice();
    }

    onRemove(product: CartProductModel): void {
        this.cartProductList.splice(this.getCardProductByName(product.name).index, 1);
        this.setPurchasesQuantityAndPrice();
    }

    onIncreaseProductQuantity(product: CartProductModel): void {
        this.getCardProductByName(product.name).product.increaseQuantity();
        this.setPurchasesQuantityAndPrice();
    }

    onReduceProductQuantity(product: CartProductModel): void {
        this.getCardProductByName(product.name).product.reduceQuantity();
        this.setPurchasesQuantityAndPrice();
    }

    addProduct(product: ProductModel): void {
        const currentProduct = this.getCardProductByName(product.name).product;

        if (currentProduct) {
            currentProduct.increaseQuantity();
        } else {
            this.cartProductList.push(new CartProduct(product.name, product.price));
        }
        this.setPurchasesQuantityAndPrice();
    }

    getCartProducts(): CartProductModel[] {
        return this.cartProductList;
    }

    getPurchasesSum(): number {
        return this.cartProducstPrice;
    }

    getPurchasesQuantity(): number {
        return this.cartProducstQuantity;
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

    private setPurchasesQuantityAndPrice(): void {
        const result = this.cartProductList.reduce((result, product) => {
            result.price = result.price + product.quantity * product.price;
            result.quantity = result.quantity + product.quantity;
            return result;
        }, { price: 0, quantity: 0 });

        this.cartProducstQuantity = result.quantity;
        this.cartProducstPrice = result.price;
    }
}
