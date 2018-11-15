export interface CartProductModel {
    name: string;
    price: number;
    quantity: number;
    increaseQuantity?: () => number;
    reduceQuantity?: () => number;
}

export class CartProduct implements CartProductModel {
    constructor(public name: string, public price: number, public quantity: number = 1) {
    }

    increaseQuantity(): number {
        return ++this.quantity;
    }

    reduceQuantity(): number {
        return this.quantity ? --this.quantity : 0;
    }
}