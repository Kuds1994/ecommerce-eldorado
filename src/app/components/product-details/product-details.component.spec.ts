import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/routing';
import { CartComponent } from '../cart/cart.component';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent, CartComponent ],
      providers: [ HttpClient, HttpHandler],
      imports: [AppRoutingModule, FontAwesomeModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add quantity to cart', () => {

    component.qtd = 0

    component.addQtd()

    expect(component.qtd).toEqual(1)
  });

  it('should remove quantity to cart', () => {

    component.qtd = 2

    component.rmvQtd()

    expect(component.qtd).toEqual(1)
  });
});
