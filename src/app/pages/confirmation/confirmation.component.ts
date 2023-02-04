import { Component, OnDestroy } from '@angular/core';
import { Cart } from 'src/app/core/models/cart';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnDestroy {

  cart!: Cart
  
  constructor(private cartService: CartService){

    this.cart = this.cartService.getCart()
  }
  ngOnDestroy(): void {

    if(this.cart.products.length > 0){

      this.cartService.empty()      


    }

    

  }

}
