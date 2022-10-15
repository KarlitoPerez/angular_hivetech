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
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
  }

   

  
}