import { Component, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  [x: string]: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
  }

  @Input() 

  _searchText: string = '';
  filteredProducts!: Product[];

  get filterProducts(){
    return this._searchText;
  }

  set filterProducts(value: string){
    this._searchText = value;
  }

  onSearchTextEntered(searchValue: string){
    
  }
}