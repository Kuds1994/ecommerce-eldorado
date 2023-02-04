import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:string = ''

  faUser = faUser
  faCartShopping = faCartShopping
  constructor(private authService: AuthService){  
      
  }

  ngOnInit(): void {

    this.authService.currentUser.subscribe(msg => this.user = msg);

  }



}
