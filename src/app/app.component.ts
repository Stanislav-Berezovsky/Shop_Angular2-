import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('appTitle')
    appTitle: ElementRef;

    ngAfterViewInit() {
        this.appTitle.nativeElement.innerText  = 'My shop';
    }
}