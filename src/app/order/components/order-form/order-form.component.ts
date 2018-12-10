import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactModel } from '../../models/contact.model';
import { OrderService } from '../../services/order.service';

@Component({
    selector: 'app-order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
    contact: ContactModel = {
        phone: '',
        email: '',
        address: ''
    };

    constructor(
        private orderService: OrderService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onBuy() {
        const contact = {
            ...this.contact
        };

        this.orderService.buildPurchase(contact);
        alert('thank you for the purhase, we will contact you in a minute');

        this.router.navigate(['']);
    }
}
