import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { OrderComponent, OrderListComponent, OrderFormComponent } from './components';

const routes: Routes = [
    {
        path: 'orders',
        component: OrdersComponent,
        children: [
            {
                path: 'add',
                component: OrderFormComponent
            },
            {
                path: '',
                component: OrderListComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }
