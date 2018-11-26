import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customSort',
    pure: false
})
export class CustomSortPipe implements PipeTransform {
    transform(products: any, sortField: string, increase: boolean = false): any {
        products.sort((firstProduct, secondProduct) => {
            if (increase) {
                return firstProduct[sortField] > secondProduct[sortField] ? 1 : -1;
            }

            return firstProduct[sortField] > secondProduct[sortField] ? -1 : 1;
        });
        return products;
    }
}