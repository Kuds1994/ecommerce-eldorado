import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  error: string = ''

  constructor(private authService:AuthService, private router:Router) {}
  ngOnInit(): void {}
  
  makeLogin(username: string, password:string){

    this.authService.login(username, password).subscribe({
    
      next: (response) => {

        this.authService.setLoggedUser(response.token, response.username)
        this.router.navigate(['/']);

      },
      error: (error) => {

        this.error = 'Dados do usuário incorretos'

      }


    });
    
  }

}
