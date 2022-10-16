import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
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

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize:number = 6;

  onTableDataChange(event:any) {
    this.page = event;
  }
}


