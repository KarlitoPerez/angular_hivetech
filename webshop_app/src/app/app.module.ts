import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './components/shared/details/product-details/product-details.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [AppComponent, NavComponent, ShoppingCartComponent, FilterComponent, ProductListComponent, FilterComponent, ProductItemComponent, ProductDetailsComponent, ErrorComponent],
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
