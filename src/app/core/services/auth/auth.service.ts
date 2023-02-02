import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string = '';

  private bUsername = new BehaviorSubject<string>('');

  currentUser = this.bUsername.asObservable();
  logged: boolean = false

  constructor(private authApiService: AuthApiService, private router:Router, private userService: UserService) { }

  login(username: string, password: string) {

    return this.authApiService.login(username, password)

  }

  loginStorage(email: string, password: string): boolean{

    let user = this.userService.loginStorage(email, password)

    if(user){

      this.setLoggedUser(user.id, user.nome)
      return true

    }

    return false

  }


  getToken(){

    return Number(localStorage.getItem('token'));

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

    const user = localStorage.getItem('token')
    return user != undefined ? true : false    

  }

  getUserLogged(){
    
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    console.log('asdasdsadd')

    if(user && token){
      
      this.setLoggedUser(Number(token), user)

    }

  }

  
  setLoggedUser(token:number, username:string){

    localStorage.setItem('token', String(token))
    localStorage.setItem('user', username)
    this.setUsername(username)

  }
}
