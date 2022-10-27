import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Response } from 'src/app/models/response';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private http: HttpClient, private productService: ProductService, private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.url.subscribe((url)=> {
      if(url.length === 0 || url[0].path === 'all'){
        this.getAll();
      } else {
        this.searchByCategory(url[0].path);
      }
    });
  }
  
  productList: Product[] = [];
  
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
      })}else if (response === '') {
      this.ngOnInit();
    }
  }

  searchByCategory(categoryName: string){
    this.productService.getProductByCategory(categoryName).subscribe((responseA:Response) =>{
      this.productList = responseA.products;
    })
  }

}
