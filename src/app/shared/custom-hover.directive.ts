import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appCustomHover]'
})
export class CustomHoverDirective {

    public constructor() { }

    @HostBinding('style.background-color')
    backgroundColor;

    @HostListener('mouseenter', ['$event'])
    enter(event: Event) {
        this.backgroundColor = 'lightgrey';
    }

    @HostListener('mouseleave', ['$event'])
    leave(event: Event) {
        this.backgroundColor = 'transparent';
    }
}
