import { Component, OnInit } from '@angular/core';

import { PurchaseModel } from '../../models/purchase.model';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../../layout';

@Component({
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    purchases: PurchaseModel[];

    constructor(
        private orderService: OrderService,
        public authService: AuthService) { }

    ngOnInit() {
        this.purchases = this.orderService.getAllUserPurchases();
    }
}
