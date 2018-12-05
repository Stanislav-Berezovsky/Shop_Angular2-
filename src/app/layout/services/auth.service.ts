import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { UserModel } from '../models/user.model';
import { LayoutServicesModule } from '../layout-services.module';

@Injectable({
    providedIn: LayoutServicesModule
})
export class AuthService {
    // user: UserModel;
    // private isLoggedIn = false;
    user: UserModel = {
        login: 'stan',
        password: '123'
    };
    private isLoggedIn = true;

    constructor() { }

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(user: UserModel): Observable<boolean> {
        return of(true)
            .pipe(
                tap(val => {
                    this.isLoggedIn = val;
                    this.user = {
                        ...user
                    };
                })
            );
    }

    logout(): void {
        this.isLoggedIn = false;
        this.user = null;
    }

    isUserLoggedIn() {
        return this.isLoggedIn;
    }
}
