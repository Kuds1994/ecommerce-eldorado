import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {

  constructor(private authService: AuthService, private route:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let admin = this.authService.getAdmin(); 
      
      if(!admin) {

        this.route.navigate(['/login'])
        return false;

      }

      if(admin === 'false'){
      
        this.route.navigate(['/user'])
        return false;

      }
      
      return true;
  }
  
}
