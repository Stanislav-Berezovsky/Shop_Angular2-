import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHoverDirective } from './custom-hover.directive';

@NgModule({
    declarations: [CustomHoverDirective],
    imports: [
        CommonModule
    ],
    exports: [CustomHoverDirective]
})
export class SharedModule { }
