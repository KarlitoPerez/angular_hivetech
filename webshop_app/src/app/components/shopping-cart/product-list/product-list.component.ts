import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product [] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) =>{
      console.log('products', products[3])
      this.productList = products;
      console.log(this.productList[3])
    })
    //fetch('https://dummyjson.com/products').then(res => res.json()).then(console.log); 
    
  }

}
