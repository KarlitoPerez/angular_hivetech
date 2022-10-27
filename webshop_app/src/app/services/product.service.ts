import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { Response } from '../models/response';



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
