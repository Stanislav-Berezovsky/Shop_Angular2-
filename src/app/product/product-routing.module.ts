import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductCardComponent , ProductFormComponent} from './components';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: 'add',
                component: ProductFormComponent
            },
            {
                path: 'edit/:productId',
                component: ProductFormComponent
            },
            {
                path: ':productId',
                component: ProductCardComponent
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
