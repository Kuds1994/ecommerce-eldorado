import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string = ''

  private bUsername = new BehaviorSubject<string>('');
  currentUser = this.bUsername.asObservable();

  constructor() { }

  login(username: string, password: string): boolean {

    localStorage.setItem('user', username);

    this.setUsername(username)

    return true;

  }


  getUser(){

    return localStorage.getItem('user');

  }

  getUsername(){    

    const user = String(localStorage.getItem('user'));


    if(user !== 'null'){
      return user
    }else{
      return ''  
    }
      

   

  }

  setUsername(value:string){

    this.bUsername.next(value)

  }

  isLogged(): boolean {

    const user = localStorage.getItem('user')
    return user != undefined ? true : false

    

  }
}
