import {ProductCategoryEnum} from '../types';

export interface ProductModel {
    name: string;
    description?: string;
    price: number;
    category?: ProductCategoryEnum;
    isAvailable: boolean;
}