import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private router:Router) { }

  private bShow = new BehaviorSubject<boolean>(false);
  private bExit = new BehaviorSubject<boolean>(false);
  private exit = false;

  currentShow = this.bShow.asObservable();
  currentExit= this.bExit.asObservable();

  setShow(value: boolean) {

    this.bShow.next(value)

  }

  setExit(value:boolean){

    //this.bExit.next(value)
    this.exit = value;

  }

  setNavigation() {

    this.setShow(false)
    this.setExit(true)

  }

  getExit()
  {
    return this.exit;
  }

}
