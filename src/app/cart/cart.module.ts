import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

import { CartElementComponent, CartComponent} from './components';


@NgModule({
    declarations: [
        CartComponent,
        CartElementComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CartRoutingModule
    ]
})
export class CartModule { }
