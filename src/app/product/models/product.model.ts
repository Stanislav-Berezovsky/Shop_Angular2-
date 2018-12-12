import { ProductCategoryEnum } from './product-category.enum';

export interface ProductModel {
    id: number;
    name: string;
    price: number;
    description?: string;
    category?: ProductCategoryEnum;
    isAvailable?: boolean;
}

export class Product implements ProductModel {
    constructor(
        public id = null,
        public name = '',
        public price = 0,
        public isAvailable = false,
        public category = ProductCategoryEnum.NotDefined,
        public description = 'description was not defined',
    ) {
    }
}
