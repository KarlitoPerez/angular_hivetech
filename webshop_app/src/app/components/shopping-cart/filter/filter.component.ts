import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private productService: ProductService) { }

  @Output() categoryChange: EventEmitter<string> = new EventEmitter<string>();

  categoryName: string = '';

  ngOnInit(): void {
  }
  
  categoryClick(val: string){
    this.categoryChange.emit(val)
  }
}
