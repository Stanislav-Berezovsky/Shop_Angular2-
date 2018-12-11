import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './../core/guards/can-deactivate.guard';
import { ProductResolveGuard } from './guards';
import { ProductListComponent, ProductCardComponent, ProductFormComponent } from './components';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: 'add',
                component: ProductFormComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: 'edit/:productId',
                component: ProductFormComponent,
                canDeactivate: [CanDeactivateGuard],
                resolve: {
                    user: ProductResolveGuard
                }
            },
            {
                path: ':productId',
                component: ProductCardComponent,
                resolve: {
                    user: ProductResolveGuard
                }
            },
            {
                path: '',
                component: ProductListComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
