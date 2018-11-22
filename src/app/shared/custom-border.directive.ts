import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

const DEFAULT_COLOR = 'black';

@Directive({
    selector: '[appCustomBorder]'
})
export class CustomBorderDirective {
    @Input('appCustomBorder') color: string;

    constructor(private el: ElementRef, private render: Renderer2) { }

    @HostListener('click')
    onClick() {
        this.render.setStyle(this.el.nativeElement, 'border', `1px solid ${this.color || DEFAULT_COLOR}`);
    }
}
