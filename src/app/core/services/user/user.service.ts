import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
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

    localStorage.setItem('userList', JSON.stringify(list))

  }

  getUser(): User[]{

    let user = localStorage.getItem('userList')

    if(!user){

      return []

    }

    return JSON.parse(user!)

  }

  getEmail(email: string): boolean {

    let user = this.getUser().filter(u => u.email === email)

    if(user.length > 0){

      return true

    }

    return false

  }

  updateUser(user: User){
    
    let list = this.getUser()

    const p = list.findIndex((p) =>

      user.id == p.id

    )
  
    list.splice(p, 1)  
    list.push(user)
 

    localStorage.setItem('userList', JSON.stringify(list))

  }
}
