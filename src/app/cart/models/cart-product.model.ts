export interface CartProductModel {
    name: string;
    price: number;
    quantity: number;
    increaseQuantity?: (quantity?: number) => number;
    reduceQuantity?: () => number;
}

export class CartProduct implements CartProductModel {
    constructor(public name: string, public price: number, public quantity: number = 1) {
    }

    increaseQuantity(quantity: number = 1): number {
        this.quantity = this.quantity + quantity;
        return this.quantity;
    }

    reduceQuantity(): number {
        return this.quantity ? --this.quantity : 0;
    }
}