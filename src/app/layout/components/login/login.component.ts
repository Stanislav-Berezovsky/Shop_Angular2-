import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
    user: UserModel = {
        login: '',
        password: ''
    };

    authError = '';

    private unsubscribe: Subject<void> = new Subject();

    public constructor(
        public authService: AuthService,
        private router: Router
    ) { }

    ngOnDestroy() {
        console.log('[takeUntil ngOnDestroy]');
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onLogin() {
        const user = {
            ...this.user
        };

        this.authService.login(user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                () => {
                    if (this.authService.isUserLoggedIn()) {
                        this.authError = '';
                        const url = this.authService.redirectUrl || 'products';
                        this.router.navigate([url]);
                    } else {
                        this.authError = 'Authentication error. Please try again';
                    }
                },
                err => console.log(err),
                () => console.log('[takeUntil] complete')
            );
    }

    onLogout() {
        this.authService.logout();
    }
}
