import { Injectable } from '@angular/core';
import { ProductCategoryEnum } from '../models/product-category.enum';
import { ProductModel } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productList: ProductModel[] = [
        {
            id: '1',
            name: 'Salmon',
            description: 'First description',
            price: 4,
            category: ProductCategoryEnum.Fish,
            isAvailable: true
        },
        {
            id: '2',
            name: 'Marlboro',
            description: 'Second description',
            price: 2,
            category: ProductCategoryEnum.Tabacco,
            isAvailable: true
        },
        {
            id: '3',
            name: 'Trout',
            description: 'Third description',
            price: 3,
            category: ProductCategoryEnum.Fish,
            isAvailable: true
        }, {
            id: '4',
            name: 'Alpen gold',
            description: 'Fourth description',
            price: 4,
            category: ProductCategoryEnum.Chocolate,
            isAvailable: true
        },
        {
            id: '5',
            name: 'Kent',
            description: 'Fifth description',
            price: 2,
            category: ProductCategoryEnum.Tabacco,
            isAvailable: false
        },
    ];

    constructor() { }

    getProducts(): Promise<ProductModel[]> {
        return Promise.resolve(this.productList);
    }

    getProductById(id: string): ProductModel {
        return this.productList.find(product => product.id === id);
    }

    updateProduct(product: ProductModel): void {

    }

    createProduct(product: ProductModel): void {

    }
}
