import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  enteredSearchValue: string = '';
  
  @Output()searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  searchProduct(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }
 
}