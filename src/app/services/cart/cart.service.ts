import { Injectable } from '@angular/core';
import { Cart } from 'src/app/core/models/cart';
import { Product } from 'src/app/core/models/product';
import { ProductCart } from 'src/app/core/models/products_cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {
    products: [],
    subtotal: 0,
    total: 0,
    discount: 0
  }; 

  private isOpen = new BehaviorSubject<string>('false');
  currentIsOpen = this.isOpen.asObservable();

  constructor() { }

  addQtdToCart(product: Product)  {

    const p = this.cart.products.findIndex((p) =>

      product.id == p.id

    )

    if(p > -1){

      this.cart.products[p].qtd += 1   

    } else {

      const productCart: ProductCart = {...product, qtd: 1}
      this.cart.products.push(productCart)
   
    }

    this.setIsOpen('true')
    this.sumUp()

  }

  addQtdToCartWithQuantity(product: Product, quantity: number)  {

    const p = this.cart.products.findIndex((p) =>

      product.id == p.id

    )

    if(p > -1){

      this.cart.products[p].qtd += quantity   

    } else {

      const productCart: ProductCart = {...product, qtd: quantity}
      this.cart.products.push(productCart)
   
    }

    this.setIsOpen('true')
    this.sumUp()


  }

  sumUp() {

    this.cart.subtotal = this.cart.products.reduce((a, b) =>{

      return a + (b.value * b.qtd!);

    }, 0)

    const totalWithDiscount = this.cart.subtotal - (this.cart.subtotal * this.cart.discount)

    this.cart.total = totalWithDiscount < 0 ? 0 : totalWithDiscount
    
  }

  getCart(): Cart {

    return this.cart;

  }


  emptyCart(id: number): Cart{

    const p = this.cart.products.findIndex((p) =>

      id == p.id

    )
  
    this.cart.products.splice(p, 1)  

    if(this.cart.products.length == 0){

      this.empty()

    }

    this.sumUp()

    return this.cart

  }

  empty(){

    this.cart = {
      products: [],
      subtotal: 0,
      total: 0,
      discount: 0
    }

  }

  removeQtdToCart(id: number): Cart{


    const p = this.cart.products.findIndex((p) =>

      id == p.id

    )

    if(this.cart.products[p].qtd - 1 == 0) {

      this.cart.products.splice(p, 1)

      if(this.cart.products.length == 0){

        this.empty()        

      }


    } else {

      this.cart.products[p].qtd -= 1 

    }   
    
    this.sumUp()

    return this.cart
  
  }

  isEmpty(): boolean {

    return this.cart.products.length == 0

  }

  setIsOpen(abrir: string){

    this.isOpen.next(abrir)

  }

  getIsOpen(){

    return this.isOpen;

  }    

  applyDiscount(value: number): Cart{

    this.cart.discount = value

    this.sumUp();

    return this.cart

  }
  

  
}
