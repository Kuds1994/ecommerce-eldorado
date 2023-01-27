import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  private bShow = new BehaviorSubject<boolean>(false);
  private bExit = new BehaviorSubject<boolean>(false);

  currentShow = this.bShow.asObservable();
  currentExit= this.bExit.asObservable();

  setShow(value: boolean) {
  
    this.bShow.next(value)

  }

  setExit(value:boolean){

    this.bExit.next(value)

  }

}
