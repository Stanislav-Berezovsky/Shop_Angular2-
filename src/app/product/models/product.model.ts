import {ProductCategoryEnum} from '../product-category.enum';

export interface ProductModel {
    name: string;
    description?: string;
    price: number;
    category?: ProductCategoryEnum;
    isAvailable: boolean;
}