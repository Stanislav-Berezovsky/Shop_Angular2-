import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent, PathNotFoundComponent } from './components';

import { LocalStorageService } from './services/local-storage.service';
import { UserOptionsService } from './services/user-options.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ContactUsComponent, PathNotFoundComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        UserOptionsService,
        LocalStorageService,
    ],
    exports: [ContactUsComponent]
})
export class CoreModule { }
