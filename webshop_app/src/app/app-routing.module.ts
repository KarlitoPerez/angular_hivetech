import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/shared/details/product-details/product-details.component';
import { FragrancesComponent } from './components/shopping-cart/fragrances/fragrances.component';
import { GroceriesComponent } from './components/shopping-cart/groceries/groceries.component';
import { HomeDecorationComponent } from './components/shopping-cart/home-decoration/home-decoration.component';
import { LaptopsComponent } from './components/shopping-cart/laptops/laptops.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { SkincareComponent } from './components/shopping-cart/skincare/skincare.component';
import { SmartphonesComponent } from './components/shopping-cart/smartphones/smartphones.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    { path: 'all', component: ProductListComponent},
    { path: '', component: ProductListComponent},
    { path: "smartphones", component: SmartphonesComponent},
    { path: "laptops", component: LaptopsComponent},
    { path: "fragrances", component: FragrancesComponent},
    { path: "skincare", component: SkincareComponent},
    { path: "groceries", component: GroceriesComponent},
    { path: "home-decoration", component: HomeDecorationComponent},
    { path: "details", component: ProductDetailsComponent},
    { path: '**', component: ErrorComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
