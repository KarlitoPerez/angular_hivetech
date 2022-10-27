import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.scss']
})
export class SkincareComponent implements OnInit {

  p:number = 1;

  @Input() productList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
