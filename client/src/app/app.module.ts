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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    CategoryComponent,
    TopBarComponent,
    CategoryHeaderComponent,
    HomeComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    CountdownModule,
    AppState
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
