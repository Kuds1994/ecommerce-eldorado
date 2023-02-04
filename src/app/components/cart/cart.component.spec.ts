import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Cart } from 'src/app/core/models/cart';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [FontAwesomeModule, BrowserAnimationsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should have called abrirCarrinho', () => {
    const spy = spyOn(component, 'abrirCarrinho')

    component.cart.discount = 0
    component.abrirCarrinho()
    
    expect(component.discountText).toBe('');


  });

  it('should be 10% discount', () => {

    component.applyDiscount('dis10')
    
    expect(component.discountText).toBe("O cupom de 10% foi aplicado");


  });

  it('should empty the cart', () => {

    const mock: Cart = {products: [{
      id: 1,
      description: '',
      title: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: [],
      qtd: 0
    }],      
      total: 10,
      subtotal: 10,
      discount: 10
    
    }

    component.cart = mock

    component.emptyCart(1)
    
    expect(component.cart.products.length).toBe(0);


  });


});
