import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBarcode, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { Cart } from 'src/app/core/models/cart';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cart!: Cart

  constructor(private cartService:CartService, private alertsService: AlertsService, private router:Router){

    this.cart = this.cartService.getCart()
    this.alertsService.setExit(false)

  }  

  payments = '';
  faBarcode = faBarcode
  faQrcode = faQrcode
  disable = true

  onSelect(option: string){


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
    
    if(!this.disable){

      this.router.navigate(['confirmation'])
    
    }
  }

}
