import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/shared/details/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
   { path: "details/:id", component: ProductDetailsComponent},
   { path: '', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
