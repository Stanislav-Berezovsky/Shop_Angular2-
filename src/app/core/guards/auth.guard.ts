import { Injectable } from '@angular/core';
import {
    CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot,
    Router, Route, NavigationExtras
} from '@angular/router';
import { AuthService } from '../../layout';

import { Observable } from 'rxjs';

import { CoreModule } from '../core.module';

@Injectable({
    providedIn: CoreModule
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('CanActivateGuard is called');
        const { url } = state;
        return this.checkLogin(url);
    }

    private checkLogin(url: string): boolean {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }

        // Navigate to the login page
        this.router.navigate(['/login']);
        return false;
    }
}
