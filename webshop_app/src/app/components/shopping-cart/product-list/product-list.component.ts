import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  response: string | Array<any> = []; 
  productList: Product[] = this.response[0];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log()
    this.productService.getProducts().subscribe((products: Product[]) =>{
      console.log('products', products)
      this.productList = products;
      console.log(this.productList)
    })
     
    
  }

  p: number = 1;
  
}
