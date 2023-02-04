import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user = ""

  constructor(private authService: AuthService) { 

    this.authService.currentUser.subscribe(user => this.user = user)

  }

}
