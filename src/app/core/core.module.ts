import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ConfigOptionsService,
        LocalStorageService
    ]
})
export class CoreModule { }
