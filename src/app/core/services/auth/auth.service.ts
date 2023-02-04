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

      this.setLoggedUser(user.id, user.nome, user.admin)
      return true

    }

    return false

  }


  getToken(){

    return Number(localStorage.getItem('token'));

  }

  getUsername(){    

    const user = localStorage.getItem('user');


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

  logout(){

    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('ad')
    this.setUsername('')    
  
  }

  getUserLogged(){
    
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    const admin = localStorage.getItem('ad')

    if(user && token && admin){
      
      this.setUsername(user)

    }

  }

  
  setLoggedUser(token:number, username:string, admin?:boolean){

    let value = admin ? 'true' : 'false'

    localStorage.setItem('token', String(token))
    localStorage.setItem('user', username)
    localStorage.setItem('ad', value)
    this.setUsername(username)

  }

  getAdmin(): string | null{

    let admin = localStorage.getItem('ad');

    return admin

  }
}
