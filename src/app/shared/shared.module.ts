import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHoverDirective } from './directives/custom-hover.directive';
import { CustomBorderDirective } from './directives/custom-border.directive';
import { CustomSortPipe } from './pipes/custom-sort.pipe';

@NgModule({
    declarations: [CustomHoverDirective, CustomBorderDirective, CustomSortPipe],
    imports: [
        CommonModule
    ],
    exports: [CustomHoverDirective, CustomBorderDirective, CustomSortPipe]
})
export class SharedModule { }
