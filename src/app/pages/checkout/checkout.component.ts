import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBarcode, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { Cart } from 'src/app/core/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cart!: Cart

  constructor(private cartService:CartService, private router:Router){

    this.cart = this.cartService.getCart()

  }  

  payments = '';
  faBarcode = faBarcode
  faQrcode = faQrcode
  disable = true

  onSelect(option: string){

    console.log(option)

    if(option === '0'){

      this.setDisable(true)

    } else {

      this.setDisable(false)

    }    

    this.payments = option;

  }

  numSequence(n: number): Array<Number>{

    return Array(n)

  }

  setDisable(value:boolean){

    this.disable = value

  }

  concluirPagamento(){
    
    console.log(this.disable)

    if(!this.disable){

      this.router.navigate(['confirmation'])
    
    }
  }

}
