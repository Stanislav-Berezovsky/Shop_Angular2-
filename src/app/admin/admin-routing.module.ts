import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent, ProductFormComponent } from './components';
import { ProductResolveGuard } from '../product';

import { AuthGuard, CanDeactivateGuard } from './../core';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'products',
                component: ManageProductsComponent
            },
            {
                path: 'products/edit/:productId',
                component: ProductFormComponent,
                canDeactivate: [CanDeactivateGuard],
                resolve: {
                    product: ProductResolveGuard
                }
            },
            {
                path: 'products/add',
                component: ProductFormComponent,
                canDeactivate: [CanDeactivateGuard]
            },
            {
                path: '',
                component: ManageProductsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
