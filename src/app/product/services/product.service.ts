import { Injectable } from '@angular/core';
import { ProductCategoryEnum } from '../product-category.enum';
import { ProductModel } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productList: ProductModel[] = [
        {
            name: 'Salmon',
            description: 'First description',
            price: 4,
            category: ProductCategoryEnum.Fish,
            isAvailable: true
        },
        {
            name: 'Marlboro',
            description: 'Second description',
            price: 2,
            category: ProductCategoryEnum.Tabacco,
            isAvailable: true
        },
        {
            name: 'Trout',
            description: 'Third description',
            price: 3,
            category: ProductCategoryEnum.Fish,
            isAvailable: true
        }, {
            name: 'Alpen gold',
            description: 'Fourth description',
            price: 4,
            category: ProductCategoryEnum.Chocolate,
            isAvailable: true
        },
        {
            name: 'Kent',
            description: 'Fifth description',
            price: 2,
            category: ProductCategoryEnum.Tabacco,
            isAvailable: false
        },
    ];

    constructor() { }

    getProducts(): ProductModel[] {
        return this.productList;
    }
}
