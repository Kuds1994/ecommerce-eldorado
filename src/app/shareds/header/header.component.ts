import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string = ''

  faUser = faUser
  faCartShopping = faCartShopping
  constructor(private authService: AuthService){  
      
  }

  ngOnInit(): void {

    this.user = this.authService.getUsername()
    this.authService.setUsername(this.user)
    this.authService.currentUser.subscribe(msg => this.user = msg);

  }



}
