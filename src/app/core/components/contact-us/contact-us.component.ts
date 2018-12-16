import { Component, OnInit, Inject, Optional, ViewChild, ElementRef } from '@angular/core';
import { APP_CONFIG, AppConfigToken } from '../../services/constant.service';

import { GeneratorToken, GeneratorFactory } from '../../services/generator.factory';
import { UserOptionsService, UserConfig } from '../../services/user-options.service';
import { AppSettingService } from '../../services/app-setting.service';
import { AppConfigModel } from '../../models/app-config.model';

@Component({
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
    providers: [
        { provide: AppConfigToken, useValue: APP_CONFIG },
        { provide: GeneratorToken, useFactory: GeneratorFactory(5) },
        UserOptionsService

    ]
})
export class ContactUsComponent implements OnInit {
    @ViewChild('userEmail') userEmail: ElementRef;
    @ViewChild('userLogin') userLogin: ElementRef;

    userConfig: UserConfig;
    public applicationConfig: Promise<AppConfigModel>;

    constructor(
        @Inject(AppConfigToken) private appConfig,
        @Inject(GeneratorToken) public randomString: string,
        @Optional() private configOptionsService: UserOptionsService,
        private appSettingService: AppSettingService
    ) { }

    ngOnInit() {
        this.applicationConfig = this.appSettingService.getAppConfig()
            .then(appConfig => {
                if (!appConfig) {
                    appConfig = this.appConfig;
                }
                return appConfig;
            });
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
