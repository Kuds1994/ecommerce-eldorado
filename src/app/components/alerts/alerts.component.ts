import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  animations:[
    trigger('showUp', [
      state('true', style({
        top: '100px'
      })),
      state('false', style({
        top: '-200px'
      })),  // animation timing
      transition('true => false', animate('400ms ease')),
      transition('false => true', animate('400ms ease'))
    ])
  ]
})
export class AlertsComponent implements OnInit {

  show: boolean = false
  sair: boolean = true

  constructor(
    private alertsService: AlertsService,
    private router: Router
    ){

    this.alertsService.currentShow.subscribe(s => this.show = s)

  }

  ngOnInit(): void {

  }

  setAlerts() {

    this.alertsService.setNavigation()
    this.alertsService.setShow(false)     
    this.router.navigate([`/`])
    
  }

  hide(){

    this.alertsService.setShow(false)

  }


}
