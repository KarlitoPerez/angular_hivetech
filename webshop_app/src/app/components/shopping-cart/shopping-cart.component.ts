import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  _searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this._searchText = searchValue;
    console.log(this._searchText)
  }
}
