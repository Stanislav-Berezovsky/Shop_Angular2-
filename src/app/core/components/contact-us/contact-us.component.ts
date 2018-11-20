import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfigToken } from '../../services/constant.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
    providers: [
        { provide: AppConfigToken, useValue: APP_CONFIG },
    ]
})
export class ContactUsComponent implements OnInit {
    content: any;

    constructor(@Inject(AppConfigToken) private appConfig, ) { }

    ngOnInit() {
        this.content = this.appConfig;
    }

}
