import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageProductsComponent, ProductFormComponent } from './components';

@NgModule({
    declarations: [AdminComponent, ManageProductsComponent, ProductFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
