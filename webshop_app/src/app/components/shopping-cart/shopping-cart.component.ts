import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Response } from 'src/app/models/response';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: HttpClient, private productService: ProductService, private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.url.subscribe((url)=> {
      if(url[0].path === 'all'){
        this.getAll();
      } else {
        this.onButtonClick(url[0].path);
      }
    });
  }
  productList: Product[] = [];
  p:number = 1;
  catResponse: string = '';

  @Output()allProducts: EventEmitter<boolean> = new EventEmitter<boolean>();

  getAll(){
    this.route.navigateByUrl('all')
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
    this.route.navigateByUrl('/'+ response);
    this.productService.getProductByCategory(response).subscribe((responseA:Response) =>{
      this.productList = responseA.products;
    })
  }

}
