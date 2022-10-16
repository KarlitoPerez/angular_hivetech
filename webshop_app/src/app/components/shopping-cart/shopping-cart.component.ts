import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Response } from 'src/app/models/response';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: HttpClient, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll()
  }
  productList: Product[] = [];
  p:number = 1;

  getAll(){
    this.productService.getProducts().subscribe((responseA: Response) =>{
      this.productList = responseA.products;
    })
  }
  onSearchTextChanged(response: string){
    if (response !== '') {
      this.productService.getProductBySearch(response).subscribe((responseA: Response) =>{
        this.productList = responseA.products;
        this.p = 1;
      })}else if (response === '') {
      this.ngOnInit();
    }
  }

  onButtonClick(response: string){
    this.productService.getProductByCategory(response).subscribe((responseA: Response) =>{
      this.productList = responseA.products;})
  }

}
