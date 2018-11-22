import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [ContactUsComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        ConfigOptionsService,
        LocalStorageService,
    ],
    exports: [ContactUsComponent]
})
export class CoreModule { }
