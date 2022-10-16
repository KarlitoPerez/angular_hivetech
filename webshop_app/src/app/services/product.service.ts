import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Product } from '../models/product';
import { Response } from '../models/response';
import { ProductListComponent } from '../components/shopping-cart/product-list/product-list.component';

const apiUrl = 'https://dummyjson.com';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Response>{
    return this.http.get<Response>(`${this.apiUrl}/products`)
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/products/` + id)
  }

  getProductBySearch(value: string): Observable<Response>{
    return this.http.get<Response>(`${this.apiUrl}/products/search?q=` + value)
  }

  getProductByCategory(value: string): Observable<Response>{
    return this.http.get<Response>(`${this.apiUrl}/products/category/` + value)
  }
}
