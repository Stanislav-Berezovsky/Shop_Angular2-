import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
    declarations: [ContactUsComponent],
    imports: [
        CommonModule
    ],
    providers: [
        ConfigOptionsService,
        LocalStorageService
    ],
    exports: [ContactUsComponent]
})
export class CoreModule { }
