import { Component, OnInit, Input } from '@angular/core';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() product;
  
  constructor() { }

  ngOnInit(): void {

  }

}
