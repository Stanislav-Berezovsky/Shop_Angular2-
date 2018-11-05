import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product/product.component';
import { ProductService } from '../product/services/product.service';

export type ProductList = ProductModel[];

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
	providers: [ProductService]
})
export class ProductListComponent implements OnInit {
	productList: ProductList;

	public constructor(private productService: ProductService) { }

	ngOnInit() {
		this.productList = this.productService.getAllProducts();
	}
}
