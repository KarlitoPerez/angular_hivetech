import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './components/shared/details/product-details/product-details.component';
import { ErrorComponent } from './error/error.component';
import { SmartphonesComponent } from './components/shopping-cart/smartphones/smartphones.component';
import { LaptopsComponent } from './components/shopping-cart/laptops/laptops.component';
import { FragrancesComponent } from './components/shopping-cart/fragrances/fragrances.component';
import { SkincareComponent } from './components/shopping-cart/skincare/skincare.component';
import { GroceriesComponent } from './components/shopping-cart/groceries/groceries.component';
import { HomeDecorationComponent } from './components/shopping-cart/home-decoration/home-decoration.component';



@NgModule({
  declarations: [AppComponent, NavComponent, ShoppingCartComponent, FilterComponent, ProductListComponent, FilterComponent, ProductItemComponent, ProductDetailsComponent, ErrorComponent, SmartphonesComponent, LaptopsComponent, FragrancesComponent, SkincareComponent, GroceriesComponent, HomeDecorationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
