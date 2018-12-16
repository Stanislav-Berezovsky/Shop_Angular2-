import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { AuthService } from './layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('appTitle')
    appTitle: ElementRef;

    constructor(public authService: AuthService) {
    }

    ngAfterViewInit() {
        this.appTitle.nativeElement.innerText = 'My shop';
    }

    onActivate($event) {
        console.log('Activated Component', $event);
    }

    onDeactivate($event) {
        console.log('Deactivated Component', $event);
    }
}
