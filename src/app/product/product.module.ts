import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProductsAPIProvider } from './products.config';
import { ProductRoutingModule } from './product-routing.module';
import { ProductServicesModule } from './product-services.module';
import { ProductComponent, ProductListComponent, ProductCardComponent } from './components';
import { ProductsComponent } from './products.component';

@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent,
        ProductCardComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductServicesModule,
        ProductRoutingModule
    ],
    providers: [ProductsAPIProvider]
})
export class ProductModule { }
