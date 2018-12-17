import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { CanComponentDeactivate } from '../../../core/guards/interfaces/can-component-deactivate.interface';
import { DialogService } from '../../../core/services/dialog.service';

import { ProductModel, Product, ProductCategoryEnum, ProductObservableService } from '../../../product';

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {
    product: ProductModel = new Product();

    private deactivateComponent = false;
    private productCategoryEnum = ProductCategoryEnum;
    private sub: Subscription;

    constructor(
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
        this.router.navigate(['admin/products']);
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
