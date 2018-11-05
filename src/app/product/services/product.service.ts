import { Injectable } from '@angular/core';
import { ProductCategoryEnum } from '../components/product.component';
import { ProductList } from '../../product-list/product-list.component';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productList: ProductList = [
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

    getAllProducts(): ProductList {
        return this.productList;
    }
}
