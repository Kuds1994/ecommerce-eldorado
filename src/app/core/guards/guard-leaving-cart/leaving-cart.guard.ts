import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CheckoutComponent } from 'src/app/pages/checkout/checkout.component';
import { AlertsService } from '../../services/alerts/alerts.service';

@Injectable({
  providedIn: 'root'
})
export class LeavingCartGuard implements CanDeactivate<CheckoutComponent> {

  constructor(private alertService: AlertsService){

  }

  canDeactivate(
    component: CheckoutComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let exit = this.alertService.getExit();

    if(!exit && nextState?.url !== '/confirmation'){

      this.alertService.setShow(true) 

    } else {

      this.alertService.setExit(true)

    }

    



    return this.alertService.getExit();
  }
  
}
