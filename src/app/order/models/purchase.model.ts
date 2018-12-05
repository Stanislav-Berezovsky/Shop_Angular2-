
import { ContactModel } from './contact.model';
import { CartProductModel } from '../../cart/models/cart-product.model';

export interface PurchaseModel {
    contact: ContactModel;
    products: CartProductModel[];
    date: Date;
}
