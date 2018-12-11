import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { CanComponentDeactivate } from '../../../core/guards/interfaces/can-component-deactivate.interface';
import { DialogService } from '../../../core/services/dialog.service';

import { ProductModel } from '../../models/product.model';
import { ProductService, ProductObservableService } from '../../services';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {
    product: ProductModel = {
        id: null,
        name: '',
        price: 0
    };

    private deactivateComponent = false;
    private sub: Subscription;

    constructor(
        private location: Location,
        private productService: ProductService,
        private productObservableService: ProductObservableService,
        private dialogService: DialogService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
            this.product = {
                ...product
            };
        });
    }


    onSave() {
        const product = { ...this.product };

        const method = product.id ? 'updateProduct' : 'createProduct';
        this.productObservableService[method](product)
            .subscribe(savedProduct => {
                this.product = {
                    ...savedProduct
                };
                console.log('Saved product', JSON.stringify(this.product));
                this.deactivateComponent = true;
                this.onGoBack();
            });

    }

    onGoBack() {
        this.location.back();
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
