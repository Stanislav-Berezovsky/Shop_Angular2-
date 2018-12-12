import { Injectable } from '@angular/core';

import { AppConfigModel } from '../models/app-config.model';
import { LocalStorageService } from './local-storage.service';
import { AppConfigHttpService } from './app-config-http.service';
import { APP_CONFIG } from './constant.service';

const LOCAL_STORAGE_KEY = 'APP_CONFIG';

@Injectable({
    providedIn: 'root'
})
export class AppSettingService {
    private app_Config: Promise<AppConfigModel> = null;

    constructor(
        private localStorageService: LocalStorageService,
        private appConfigHttpService: AppConfigHttpService
    ) { }

    getAppConfig() {
        if (this.app_Config) {
            return this.app_Config;
        }

        const config = this.localStorageService.getItem(LOCAL_STORAGE_KEY);
        if (config) {
            this.app_Config = Promise.resolve(config);
            return this.app_Config;
        }

        this.app_Config = this.appConfigHttpService.getAppConfig()
            .then(appConf => {
                appConf = appConf ? appConf : APP_CONFIG;
                this.setAppConfigToLocalStorage(appConf);
                return appConf;
            });

        return this.app_Config;
    }

    private setAppConfigToLocalStorage(config: AppConfigModel): void {
        this.localStorageService.setItem(LOCAL_STORAGE_KEY, config);
    }
}
