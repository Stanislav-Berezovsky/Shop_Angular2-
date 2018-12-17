import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageProductsComponent } from './components';

@NgModule({
    declarations: [AdminComponent, ManageProductsComponent],
    imports: [
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
