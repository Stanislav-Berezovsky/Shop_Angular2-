import { Injectable } from '@angular/core';

import { OrderServicesModule } from '../order-services.module';

import { AuthService } from '../../layout/services/auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { CartService } from '../../cart/services/cart.service';
import { ContactModel } from '../models/contact.model';
import { PurchaseModel } from '../models/purchase.model';

const LOCAL_STORAGE_KEY = 'ORDERS';

@Injectable({
    providedIn: OrderServicesModule
})
export class OrderService {
    private purchases: PurchaseModel[] = [];

    constructor(
        private cartService: CartService,
        private authService: AuthService,
        private localStorageService: LocalStorageService
    ) {
    }

    buildPurchase(contact: ContactModel) {
        const purchase: PurchaseModel = {
            contact: contact,
            products: this.cartService.getCartProducts(),
            date: new Date()
        };

        if (this.authService.isUserLoggedIn()) {
            this.addNewPurchase(purchase);
        }

        this.cartService.onCleanUpCart();
    }

    getAllUserPurchases(): PurchaseModel[] {
        this.purchases = (this.localStorageService.getItem(`ORDERS_${this.authService.user.login}`) || [])
            .map(purchase => {
                purchase.date = new Date(purchase.date);
                return purchase;
            });
        return this.purchases;
    }

    private addNewPurchase(purchase: PurchaseModel): void {
        this.purchases.push(purchase);

        this.localStorageService.setItem(`ORDERS_${this.authService.user.login}`, this.purchases);
    }
}
