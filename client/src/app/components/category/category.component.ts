import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Category from 'src/app/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public id: string;
  public category = {} as Category;
  public products: [{}];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CategoryService) { }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.getProducts();
    // this.fetch(this.id);

    this.activatedRoute.params
    .subscribe(routeParams => {
      this.fetch(routeParams.id);
    })
    
  }

  getProducts() {
    // this.service.getProductsByCategoryId(this.id)
    //   .subscribe(products => this.products = products);
  }

  fetch(id: string) {
    this.service.getById(id)
    .subscribe((r: any) => this.category = r);

  }

}
