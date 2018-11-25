import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHoverDirective } from './custom-hover.directive';
import { CustomBorderDirective } from './custom-border.directive';
import { CustomSortPipe } from './custom-sort.pipe';

@NgModule({
    declarations: [CustomHoverDirective, CustomBorderDirective, CustomSortPipe],
    imports: [
        CommonModule
    ],
    exports: [CustomHoverDirective, CustomBorderDirective, CustomSortPipe]
})
export class SharedModule { }
