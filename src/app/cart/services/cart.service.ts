import { Injectable } from '@angular/core';
import { ProductModel } from '../../product/components/product.component';

interface CartProductModel {
    name: string;
    price: number;
    count: number;
}

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

    addProduct(product: ProductModel): void {
        const currentProduct = this.getCardProductByName(product.name);

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

    private getCardProductByName(name: string): CartProductModel {
        return this.cartProductList.filter(cartProduct => {
            return cartProduct.name === name;
        })[0];
    }
}
