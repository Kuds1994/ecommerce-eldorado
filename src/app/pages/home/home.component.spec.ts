import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertsComponent } from 'src/app/components/alerts/alerts.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { ListProductsComponent } from 'src/app/components/list-products/list-products.component';
import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, CarouselComponent, ListProductsComponent, AlertsComponent, CartComponent],
      providers: [ HttpClient, HttpHandler],
      imports: [SwiperModule, FontAwesomeModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
