import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor(private service:ProductService) { }
  ngOnInit(): void {
    
  }

  productList: Product[] = [];
  enteredSearchValue: string = '';
  

  @Output()searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output()allProducts: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  searchProduct(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }
   allProductsButton(){
    this.allProducts.emit(true)
   }
 
  
}