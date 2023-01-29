import { TestBed } from '@angular/core/testing';

import { AlertsService } from './alerts.service';

describe('AlertsService', () => {
  let service: AlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the show to true', () => {

    let boolean = false;

    service.setShow(true)

    service.currentShow.subscribe((data) => {
      boolean = data;
      
    })

    expect(boolean).toBe(true);
  });


  it('should return the value of exit', () => {

    let boolean = service.getExit()

    expect(boolean).toBe(false);
  });
});
