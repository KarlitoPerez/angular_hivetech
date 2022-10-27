import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/shared/details/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
   { path: "details/:id", component: ProductDetailsComponent},
   { path: '', component: ShoppingCartComponent},
   { path: "all", component: ShoppingCartComponent},
   { path: "smartphones", component: ShoppingCartComponent},
    { path: "laptops", component: ShoppingCartComponent},
    { path: "fragrances", component: ShoppingCartComponent},
    { path: "skincare", component: ShoppingCartComponent},
    { path: "groceries", component: ShoppingCartComponent},
    { path: "home-decoration", component: ShoppingCartComponent},
    { path: "details/:id", component: ProductDetailsComponent},
    { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
