import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {

  p:number = 1;

  @Input() productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
