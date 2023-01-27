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
import { GuardsGuard } from './core/guard-login/guards.guard';
import { NotFoundComponent } from './shareds/not-found/not-found.component';
import { LeavingCartGuard } from './core/guard-leaving-cart/leaving-cart.guard';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent, canActivate: [GuardsGuard]},
  {path: 'cart', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutComponent, canDeactivate: [LeavingCartGuard]},  
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent}
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }