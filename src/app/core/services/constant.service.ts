import { InjectionToken } from '@angular/core';

export const AppConfigToken = new InjectionToken<object>('appConfig');

export const APP_CONFIG = {
    App: "Shop", Ver: "1.0"
}