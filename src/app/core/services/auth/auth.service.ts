import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string = '';

  private bUsername = new BehaviorSubject<string>('');

  currentUser = this.bUsername.asObservable();
  logged: boolean = false

  constructor(private authApiService: AuthApiService, private router:Router) { }

  login(username: string, password: string) {

    return this.authApiService.login(username, password)

  }


  getToken(){

    return localStorage.getItem('token');

  }

  getUsername(){    

    const user = localStorage.getItem('username');


    if(user){

      return user

    }else{

      return null  

    }        

  }

  setUsername(value:string){

    this.bUsername.next(value)

  }

  isLogged(): boolean {

    const user = localStorage.getItem('user')
    return user != undefined ? true : false    

  }

  setLoggedUser(token:string, username:string){

    localStorage.setItem('token', token)
    localStorage.setItem('user', username)
    this.setUsername(username)

  }
}
