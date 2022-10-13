import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private service:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getProductById(params['id']))
  }
  
  getProductById(id:number){
    this.service.getProductById(id).subscribe((data:Product) => this.product = data)
  }
}
