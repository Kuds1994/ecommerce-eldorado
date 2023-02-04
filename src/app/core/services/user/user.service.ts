import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Address } from '../../models/address';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUser(user: User){

    let list = this.getUsers()

    if(list){

      list.push(user)
      
    } else {

      list = []
      list.push(user)

    }    

    localStorage.setItem('userList', JSON.stringify(list))

  }

  getUsers(): User[]{

    let user = localStorage.getItem('userList')

    if(!user){

      return []

    }

    return JSON.parse(user!)

  }

  getEmail(email: string): boolean {

    let user = this.getUsers().filter(u => u.email === email)

    if(user.length > 0){

      return true

    }

    return false

  }

  updateUser(user: User){
    
    let list = this.getUsers()

    const p = list.findIndex((p) =>

      user.id == p.id

    )
  
    list.splice(p, 1)  
    list.push(user)
 

    localStorage.setItem('userList', JSON.stringify(list))

  }

  updateFieldUser(id: number, field: string, value: any) {
    
    let list = this.getUsers()

    const p = list.findIndex((p) =>

      id == p.id

    )
  
    let user = list[p]  
    
    user[field] = value

    list.push()
 

    localStorage.setItem('userList', JSON.stringify(list))

  }

  

  updateAddress(user: number, address: Address){
  
    let list = this.getUsers()

    const p = list.findIndex((p) =>

      user == p.id

    )

    const a = list[p].address.findIndex((p) =>

      address.id == p.id

    )   

    if(a == -1){

      list[p].address.push(address)

    } else {    
  
      list[p].address.splice(a, 1)  
      list[p].address.push(address)

    }
 

    localStorage.setItem('userList', JSON.stringify(list))

  }

  getUser(token: number): User{
    
    let list = this.getUsers()

    const p = list.findIndex((p) =>

      token == p.id

    )
  
    return list[p]

  }

  loginStorage(email: string, password: string): User{
    
    let list = this.getUsers()

    const p = list.findIndex((p) =>

      p.email === email && p.senha === password

    )

    return list[p]

  }

  saveAddress(number: number){

    //this.saveAddress

  }
}
