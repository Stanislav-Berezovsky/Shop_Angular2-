import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request interceptor
        let start;
        if (req.url.includes('products')) {
            start = Date.now();
        }
        return next.handle(req)
            .pipe(
                // response interceptor
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        // do stuff with response
                        if (event.url.includes('products')) {
                            const result = ((Date.now() - start) / 1000).toFixed(3);
                            console.log(`Products_TimingInterceptor request time: ${result} s, url: ${event.url}`);
                        }
                    }

                    return event;
                })
            );
    }
}
