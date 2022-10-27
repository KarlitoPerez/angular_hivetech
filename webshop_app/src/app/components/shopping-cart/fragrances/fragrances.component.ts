import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-fragrances',
  templateUrl: './fragrances.component.html',
  styleUrls: ['./fragrances.component.scss']
})
export class FragrancesComponent implements OnInit {

  p:number = 1;

  @Input() productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
