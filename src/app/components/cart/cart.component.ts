import { Component, OnInit } from '@angular/core';

import { faShoppingCart, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Cart } from 'src/app/core/models/cart';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { Discount } from 'src/app/core/models/discount';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { DiscountService } from 'src/app/services/discount/discount.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations:[
    trigger('toggleClick', [
      state('true', style({
        right: 0
      })),
      state('false', style({
        right: '-500px'
      })),
      transition('true => false', animate('400ms ease')),  // animation timing
      transition('false => true', animate('400ms ease'))
    ])
  ]
})
export class CartComponent implements OnInit {

  
  constructor(private cartService: CartService, private discountService: DiscountService){}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartService.currentIsOpen.subscribe(msg => this.openCart = msg);
    this.openCart = 'false'
  }  

  faShoppingCart = faShoppingCart 
  faXmark = faXmark
  faTrash = faTrash

  discountText = ""
  
  openCart = 'false';

  cart!: Cart

  list_discounts!: Discount[]

  fecharCarrinho(){

    this.openCart = 'false'

    if(this.cart.discount == 0){

      this.discountText = ""

     }

  }

  abrirCarrinho(){

    this.openCart = 'true'
    if(this.cart.discount == 0){

      this.discountText = ""

    }    


  }

  addQtdToCart(id: Product) {

    this.cartService.addQtdToCart(id)

  }

  removeQtdToCart(id: number){

    this.cart = this.cartService.removeQtdToCart(id)   
  
  }

  emptyCart(id: number){

    this.cart = this.cartService.emptyCart(id)

  }

  applyDiscount(value: string){

    const discount = this.discountService.applyDiscount(value);

    if(discount){

      this.cartService.applyDiscount(discount.value)
      this.discountText = "O cupom de " + discount.value * 100 + "% foi aplicado"
      

    }  else {
      
      this.cartService.applyDiscount(0)
      this.discountText = "O cupom não foi encontrado"

    }
      

  }

}
