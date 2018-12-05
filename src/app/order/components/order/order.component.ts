import { Component, Input } from '@angular/core';

import { PurchaseModel } from '../../models/purchase.model';


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent {
    @Input() purchase: PurchaseModel;
}
