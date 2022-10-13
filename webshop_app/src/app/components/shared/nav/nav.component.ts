import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Response } from 'src/app/models/response';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from '../../shopping-cart/product-list/product-list.component';

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
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  searchProduct(){
    alert("halo halo")
  }
  
  Search(){
    if(this.enteredSearchValue == ''){
      this.ngOnInit();
    }else{
      this.productList = this.productList.filter((res: { title: string; }) =>{
        return res.title.toLocaleLowerCase().match(this.enteredSearchValue.toLocaleLowerCase())
      })
    }
  }
  
}
