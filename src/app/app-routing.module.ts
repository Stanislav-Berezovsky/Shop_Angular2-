import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, PathNotFoundComponent } from './layout';
import { ContactUsComponent, AuthGuard } from './core';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'test_page',
        component: ContactUsComponent
    },
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PathNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
