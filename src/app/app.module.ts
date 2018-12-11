import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TimingInterceptor } from './core/interceptors/timing.interceptor';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from './order/order.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        LayoutModule,
        ProductModule,
        CartModule,
        OrderModule,
        CoreModule,
        AppRoutingModule
    ],
    providers: [
        // add this line if you don't have access to
        // index.html and you want to set base tag
        // { provide: APP_BASE_HREF, useValue: '/' }
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TimingInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
