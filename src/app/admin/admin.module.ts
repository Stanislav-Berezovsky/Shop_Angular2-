import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageProductsComponent, ProductFormComponent } from './components';

import { StoreModule } from '@ngrx/store';
import { ProductsEffects, productsReducer } from '../core/+store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [AdminComponent, ManageProductsComponent, ProductFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        StoreModule.forFeature('products', productsReducer),
        EffectsModule.forFeature([ProductsEffects])
    ]
})
export class AdminModule { }
