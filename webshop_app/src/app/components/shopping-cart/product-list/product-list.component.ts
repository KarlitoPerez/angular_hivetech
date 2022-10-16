import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  @Input() productList: Product[] = [];
  

  ngOnInit(): void {

  }

  p:number = 1;
  
}


