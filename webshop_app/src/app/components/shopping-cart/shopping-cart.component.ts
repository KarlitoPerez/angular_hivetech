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

  constructor(private http: HttpClient, private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  productList: Product[] = [];
  p:number = 1;
  catResponse: string = '';

  @Output()allProducts: EventEmitter<boolean> = new EventEmitter<boolean>();

  getAll(){
    this.route.navigate(['all'])
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
    if(response==='smartphones'){
      this.catResponse = response
      this.route.navigate(['/smartphones'])
      this.productService.getProductByCategory(response).subscribe((responseA: Response) =>{
        this.productList = responseA.products;
      }) 
    }else if(response==='laptops'){
      this.catResponse = response
      this.route.navigate(['/laptops'])
      this.productService.getProductByCategory(response).subscribe((responseA: Response) =>{
        this.productList = responseA.products;
      }) 
    }else if(response==='fragrances'){
      this.catResponse = response
      this.route.navigate(['/fragrances'])
      this.productService.getProductByCategory(response).subscribe((responseA: Response) =>{
        this.productList = responseA.products;
      }) 
    }else if(response==='skincare'){
      this.catResponse = response
      this.route.navigate(['/skincare'])
      this.productService.getProductByCategory(response).subscribe((responseA: Response) =>{
        this.productList = responseA.products;
      }) 
    }else if(response==='groceries'){
      this.catResponse = response
      this.route.navigate(['/groceries'])
      this.productService.getProductByCategory(response).subscribe((responseA: Response) =>{
        this.productList = responseA.products;
      }) 
    }else if(response==='home-decoration'){
      this.catResponse = response
      this.route.navigate(['/home-decoration'])
      this.productService.getProductByCategory(response).subscribe((responseA: Response) =>{
        this.productList = responseA.products;
      }) 
    }
  }

}
