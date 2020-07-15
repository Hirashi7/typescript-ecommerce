import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/products/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { AddressComponent } from './components/order/address/address.component';
import { ShippingComponent } from './components/order/shipping/shipping.component';
import { PaymentComponent } from './components/order/payment/payment.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'order/step1',
    component: AddressComponent
  },
  {
    path: 'order/step2',
    component: ShippingComponent
  },
  {
    path: 'order/step3',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
