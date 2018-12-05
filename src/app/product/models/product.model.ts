import { ProductCategoryEnum } from './product-category.enum';

export interface ProductModel {
    id: string;
    name: string;
    description?: string;
    imgUrl?: string;
    price: number;
    category?: ProductCategoryEnum;
    isAvailable: boolean;
}
