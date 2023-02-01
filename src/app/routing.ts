import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AdminComponent } from './components/admin/admin.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserComponent } from './pages/user/user.component';
import { GuardsGuard } from './core/guards/guard-login/guards.guard';
import { NotFoundComponent } from './shareds/not-found/not-found.component';
import { LeavingCartGuard } from './core/guards/guard-leaving-cart/leaving-cart.guard';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent, canActivate: [GuardsGuard]},
  {path: 'cart', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutComponent, canDeactivate: [LeavingCartGuard], canActivate: [GuardsGuard]},  
  {path: 'confirmation', component: ConfirmationComponent, canActivate: [GuardsGuard]},
  {path: 'signin', component: SignupComponent},
  {path: 'create-products', component: CreateProductsComponent, canActivate:[GuardsGuard]},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'product-list/:category', component: ProductListPageComponent},
  {path: '**', component: NotFoundComponent}
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }