import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Response } from 'src/app/models/response';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  
  productList: Product[] = [] ; // enteering array of products
  emptyList: string[] = []

  constructor(private productService: ProductService) { }

  @Output() parentFunction: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe((responseA: Response) =>{
      this.productList = responseA.products;
    })
  }
  
  /*this.productList = responseA.products.filter(res => {
    return res.title.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
  });*/

  
  

  /*onSearchTextChanged(response: Product){
    if (this.enteredSearchValue !== '') {
      this.productList = this.productList.filter(res => {
        return res.title.toLowerCase().match(this.enteredSearchValue.toLowerCase());
      });
    } else if (this.enteredSearchValue === '') {
      this.ngOnInit();
    }
  }*/
  
  
  p: number = 1;
  
}


