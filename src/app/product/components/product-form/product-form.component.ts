import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { CanComponentDeactivate } from '../../../core/guards/interfaces/can-component-deactivate.interface';
import { DialogService } from '../../../core/services/dialog.service';

import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
    product: ProductModel = {
        id: null,
        name: '',
        price: 0
    };

    constructor(
        private productService: ProductService,
        private dialogService: DialogService,
        private router: Router
    ) { }

    ngOnInit() {
    }


    onSave() {
        const product = { ...this.product };

        if (product.id) {
            this.productService.updateProduct(product);
            this.router.navigate(['/products', { editedUserID: product.id }]);
        } else {
            this.productService.createProduct(product);
            this.onGoToHomePage();
        }
        // this.originalUser = { ...this.user };
    }

    onGoToHomePage() {
        this.router.navigate(['/products']);
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.dialogService.confirm('Discard changes?');
    }
}
