import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent, ProductListComponent, ProductCardComponent, ProductFormComponent } from './components';
import { ProductsComponent } from './products.component';

@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent,
        ProductCardComponent,
        ProductFormComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ProductRoutingModule
    ]
})
export class ProductModule { }
