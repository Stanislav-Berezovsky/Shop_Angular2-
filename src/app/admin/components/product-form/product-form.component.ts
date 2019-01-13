import { Component, OnInit, OnDestroy } from '@angular/core';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { Observable, Subscription } from 'rxjs';

import { CanComponentDeactivate } from '../../../core/guards/interfaces/can-component-deactivate.interface';
import { DialogService } from '../../../core/services/dialog.service';

import { ProductModel, Product } from '../../../product';

import { Store, select } from '@ngrx/store';
import { AppState, getSelectedUserByUrl } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {
    product: ProductModel = new Product();

    private deactivateComponent = false;
    private sub: Subscription;

    constructor(
        private store: Store<AppState>,
        private dialogService: DialogService
    ) { }

    ngOnInit() {
        this.sub = this.store
            .pipe(select(getSelectedUserByUrl))
            .subscribe(product => this.product = product);
    }

    onSave() {
        const product = { ...this.product };
        this.deactivateComponent = true;

        if (product.id) {
            this.store.dispatch(new ProductsActions.UpdateProduct(product));
        } else {
            this.store.dispatch(new ProductsActions.CreateProduct(product));
        }
    }

    onGoBack() {
        this.store.dispatch(new RouterActions.Back());
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.deactivateComponent || this.dialogService.confirm('Discard changes?');
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
