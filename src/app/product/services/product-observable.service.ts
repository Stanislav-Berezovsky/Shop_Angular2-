import { Injectable, Inject } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { concatMap, catchError } from 'rxjs/operators';

import { ProductServicesModule } from '../product-services.module';
import { ProductsAPI } from '../products.config';
import { ProductModel } from '../models/product.model';

@Injectable({
    providedIn: ProductServicesModule
})
export class ProductObservableService {
    constructor(
        private http: HttpClient,
        @Inject(ProductsAPI) private productsUrl: string
    ) {
    }

    getProducts(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(this.productsUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    getProduct(id: number): Observable<ProductModel> {
        return this.http.get<ProductModel>(`${this.productsUrl}/${id}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateProduct(product: ProductModel): Observable<ProductModel> {
        const url = `${this.productsUrl}/${product.id}`,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };

        return this.http.put<ProductModel>(url, body, options)
            .pipe(catchError(this.handleError));
    }

    createProduct(product: ProductModel): Observable<ProductModel> {
        const url = this.productsUrl,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        return this.http.post<ProductModel>(url, body, options)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteProduct(product: ProductModel): Observable<ProductModel[]> {
        const url = `${this.productsUrl}/${product.id}`;

        return this.http.delete(url)
            .pipe(
                concatMap(() => this.getProducts())
            );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage: string;

        // A client-side or network error occurred.
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
