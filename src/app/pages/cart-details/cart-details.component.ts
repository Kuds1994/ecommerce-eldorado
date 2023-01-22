import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Cart } from 'src/app/core/models/cart';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { DiscountService } from 'src/app/services/discount/discount.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  faShoppingCart = faShoppingCart 
  faXmark = faXmark
  faTrash = faTrash

  cart!: Cart
  discountText = ""

  constructor(private cartService:CartService, private discountService:DiscountService){
    this.cart = this.cartService.getCart()
  }

  ngOnInit(): void {
      
    this.cartService.applyDiscount(0)
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
