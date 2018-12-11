import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

import { ProductServicesModule } from '../product-services.module';
import { ProductObservableService } from '../services';
import { ProductModel, Product } from '../models';

@Injectable({
    providedIn: ProductServicesModule
})
export class ProductResolveGuard implements Resolve<ProductModel> {
    constructor(
        private productObservableService: ProductObservableService,
        private router: Router
    ) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
        if (!route.paramMap.has('productId')) {
            return of(new Product());
        }

        const id = +route.paramMap.get('productId');

        return this.productObservableService.getProduct(id)
            .pipe(
                map((product: ProductModel) => {
                    if (product) {
                        return product;
                    } else {
                        this.router.navigate(['/products']);
                        return null;
                    }
                }),
                take(1),
                catchError(() => {
                    this.router.navigate(['/products']);
                    // catchError MUST return observable
                    return of(null);
                })
            );
    }
}
