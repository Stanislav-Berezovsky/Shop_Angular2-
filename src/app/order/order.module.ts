import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { OrderServicesModule } from './order-services.module';
import { OrderListComponent, OrderFormComponent } from './components';
import { OrdersComponent } from './orders.component';

@NgModule({
    declarations: [OrderListComponent, OrderFormComponent, OrdersComponent],
    imports: [
        CommonModule,
        FormsModule,
        OrderServicesModule,
        OrderRoutingModule
    ]
})
export class OrderModule { }
