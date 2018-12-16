import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfigModel } from '../models/app-config.model';

const appConfigUrl = './assets/app-setting.json';

@Injectable({
    providedIn: 'root'
})
export class AppConfigHttpService {

    constructor(private http: HttpClient) { }

    getAppConfig(): Promise<AppConfigModel> {
        return this.http.get(appConfigUrl)
            .toPromise()
            .then(responce => {
                return <AppConfigModel>responce;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
