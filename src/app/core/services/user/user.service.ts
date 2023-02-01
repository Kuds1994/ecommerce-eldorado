import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUser(user: User){

    let list = this.getUser()

    if(list){

      list.push(user)
      
    } else {

      list = []
      list.push(user)

    }    

    localStorage.setItem('user', JSON.stringify(list))

  }

  getUser(): User[]{

    let user = localStorage.getItem('user')
    return JSON.parse(user!)

  }
}
