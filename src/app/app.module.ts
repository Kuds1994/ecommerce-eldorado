import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule } from './routing';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './shareds/not-found/not-found.component';
import { HeaderComponent } from './shareds/header/header.component';
import { FooterComponent } from './shareds/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SwiperModule } from "swiper/angular";
import { AlertsComponent } from './components/alerts/alerts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';



@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    CartComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CheckoutComponent,
    ConfirmationComponent,
    CarouselComponent,
    AlertsComponent,
    ProductListPageComponent,
    CreateProductsComponent,
    ListUsersComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    SwiperModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
