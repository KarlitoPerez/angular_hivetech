import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home-decoration',
  templateUrl: './home-decoration.component.html',
  styleUrls: ['./home-decoration.component.scss']
})
export class HomeDecorationComponent implements OnInit {

  p:number = 1;

  @Input() productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
