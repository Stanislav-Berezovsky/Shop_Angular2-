import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProductsAPIProvider } from './products.config';
import { ProductRoutingModule } from './product-routing.module';
import { ProductServicesModule } from './product-services.module';
import { ProductComponent, ProductListComponent, ProductCardComponent } from './components';
import { ProductsComponent } from './products.component';

import { StoreModule } from '@ngrx/store';
import { ProductsEffects, productsReducer } from '../core/+store';
import { EffectsModule } from '@ngrx/effects';

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
        ProductRoutingModule,
        StoreModule.forFeature('products', productsReducer),
        EffectsModule.forFeature([ProductsEffects])
    ],
    providers: [ProductsAPIProvider]
})
export class ProductModule { }
