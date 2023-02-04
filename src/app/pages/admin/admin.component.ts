import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {  faChevronCircleRight, faXmark } from '@fortawesome/free-solid-svg-icons';

interface IShow {

  id: string
  value: boolean

}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations:[
    trigger('showUp1', [
      state('true', style({
        'max-height': '200px'
      })),
      state('false', style({
        'max-height': '0'
      })),  // animation timing
      transition('true => false', animate('400ms ease')),
      transition('false => true', animate('400ms ease'))
    ])
  ]
})
export class AdminComponent {

  show: IShow[] = [] 

  choice: number = 0

  faChevronCircleRight = faChevronCircleRight
  faXmark = faXmark

  users: User[] = []

  @ViewChildren('cmp') components:QueryList<ElementRef> | undefined;

  constructor(private userService:UserService, private el: ElementRef) {

    this.users = this.userService.getUsers()   
    this.preencherMostrar(this.users) 
    
  }

  hideShow(user_id: number, address: number){

    let show = this.show.findIndex((p) =>

      p.id == `${user_id}-${address}`

    )

    return this.show[show].value    

  }

  buttonHideShow(user_id: number, address: number){
  
    let show = this.show.findIndex((p) =>

      p.id == `${user_id}-${address}`

    )

    this.show[show].value = !this.show[show].value    
    

  } 

  preencherMostrar(users: User[]){

    users.forEach(user => {

      user.address.forEach(address => {

        this.show.push({id: `${user.id}-${address.id}`, value: false})

      })

    })

  }

  tornarAdmin(user: number, valor: boolean){

    console.log(valor)

    this.userService.updateFieldUser(user, 'admin', valor)

  }




}
