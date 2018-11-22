import { Component, OnInit, Inject, Optional, ViewChild, ElementRef } from '@angular/core';
import { APP_CONFIG, AppConfigToken } from '../../services/constant.service';
import { GeneratorToken, GeneratorFactory } from '../../services/generator.factory';
import { ConfigOptionsService, UserConfig } from '../../services/config-options.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
    providers: [
        { provide: AppConfigToken, useValue: APP_CONFIG },
        { provide: GeneratorToken, useFactory: GeneratorFactory(5) },
        ConfigOptionsService

    ]
})
export class ContactUsComponent implements OnInit {
    @ViewChild('userEmail') userEmail: ElementRef;
    @ViewChild('userLogin') userLogin: ElementRef;

    private userConfig: UserConfig;

    constructor(
        @Inject(AppConfigToken) private appConfig,
        @Inject(GeneratorToken) private randomString: string,
        @Optional() private configOptionsService: ConfigOptionsService
    ) { }

    ngOnInit() {
        if (this.configOptionsService) {
            this.userConfig = this.configOptionsService.loadConfig();
        } else {
            console.log(`configOptionsService isn't injected :(`);
        }
    }

    setUserConfig() {
        const a = this.userLogin;
        this.configOptionsService.setConfig({
            id: this.randomString,
            email: this.userEmail.nativeElement.value,
            login: this.userLogin.nativeElement.value
        });

        this.userEmail.nativeElement.value = '';
        this.userLogin.nativeElement.value = '';

        this.userConfig = this.configOptionsService.getConfig();
    }
}
