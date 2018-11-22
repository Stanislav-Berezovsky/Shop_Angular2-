import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHoverDirective } from './custom-hover.directive';
import { CustomBorderDirective } from './custom-border.directive';

@NgModule({
    declarations: [CustomHoverDirective, CustomBorderDirective],
    imports: [
        CommonModule
    ],
    exports: [CustomHoverDirective, CustomBorderDirective]
})
export class SharedModule { }
