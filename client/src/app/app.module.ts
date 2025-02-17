import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryHeaderComponent } from './components/category/category-header/category-header.component';
import { HomeComponent } from './components/home/home.component';

import { CountdownModule } from 'ngx-countdown';

import AppState from './app.state';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { ProductComponent } from './components/products/product/product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { AddressComponent } from './components/order/address/address.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { ShippingComponent } from './components/order/shipping/shipping.component';
import { PaymentComponent } from './components/order/payment/payment.component';
import { SummaryComponent } from './components/order/summary/summary.component';
import { CartTableComponent } from './components/cart/cart-table/cart-table.component';
import { ThankyouComponent } from './components/order/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    CategoryComponent,
    TopBarComponent,
    CategoryHeaderComponent,
    HomeComponent,
    SingleProductComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    AddressComponent,
    OrderDetailsComponent,
    ShippingComponent,
    PaymentComponent,
    SummaryComponent,
    CartTableComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CountdownModule,
    AppState
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
