import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUser(user: User){

    localStorage.setItem('user', JSON.stringify(user))

  }

  getUser(): User{

    let user = localStorage.getItem('user')
    return JSON.parse(user!)

  }
}
