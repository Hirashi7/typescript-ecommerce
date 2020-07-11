import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Product from 'src/app/models/product.model';
import AppState from 'src/app/app.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public id: string;
  public product = {} as Product;
  public quantity = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.params
    .subscribe(routeParams => {
      this.fetch(routeParams.id);
    })
    
  }

  fetch(id: string) {
    this.service.getById(id)
    .then((r: any) => {
      this.product = r;
      console.log(r);
    });
  }

  addToCart() {
    let appState = AppState.getInstance() as AppState;

    appState.addToCart(this.product, this.quantity);

    this.router.navigate(['/cart']);
    
  }

}
