import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductResolveGuard } from './guards';
import { ProductListComponent, ProductCardComponent } from './components';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: ':productId',
                component: ProductCardComponent,
                resolve: {
                    product: ProductResolveGuard
                }
            },
            {
                path: '',
                component: ProductListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
