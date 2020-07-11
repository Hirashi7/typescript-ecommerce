import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products = [];

  constructor(private service: ProductService) {}

  getProducts() {
    this.service.getAll()
      .then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
