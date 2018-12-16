import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutServicesModule } from './layout-services.module';
import { LoginComponent, PathNotFoundComponent } from './components';

@NgModule({
    declarations: [LoginComponent, PathNotFoundComponent],
    imports: [
        CommonModule,
        FormsModule,
        LayoutServicesModule
    ]
})
export class LayoutModule { }
