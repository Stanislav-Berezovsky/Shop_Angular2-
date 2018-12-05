import { Component, OnInit } from '@angular/core';

import { PurchaseModel } from '../../models/purchase.model';
import { OrderService } from '../../services/order.service';

@Component({
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    purchases: PurchaseModel[];

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.purchases = this.orderService.getAllUserPurchases();
    }

}
