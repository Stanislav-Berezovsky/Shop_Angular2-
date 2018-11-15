import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';


@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [ProductService],
    exports: [ProductListComponent]
})
export class ProductModule { }
