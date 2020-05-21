import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public id: string;
  public products: [{}];

  constructor(
    private _Activatedroute: ActivatedRoute, 
    private service: CategoryService) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.getProducts();
  }

  getProducts() {
    this.service.getProductsByCategoryId(this.id)
      .subscribe(products => this.products = products);
  }

}
