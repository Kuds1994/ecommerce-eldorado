import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'carrinho_compras'

  constructor(private authUser: AuthService) {

    this.authUser.getUserLogged()

  }

}
