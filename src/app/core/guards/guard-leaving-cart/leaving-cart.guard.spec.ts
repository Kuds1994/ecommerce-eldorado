import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CheckoutComponent } from 'src/app/pages/checkout/checkout.component';

import { LeavingCartGuard } from './leaving-cart.guard';

describe('LeavingCartGuard', () => {
  let guard: LeavingCartGuard;

  let component: CheckoutComponent
  let currentRoute: ActivatedRouteSnapshot
  let currentState: RouterStateSnapshot
  let nextState: RouterStateSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeavingCartGuard);
  });

  it('should can deactivate rout', () => {

    guard.canDeactivate(component, currentRoute, currentState, nextState)

    expect(guard.canDeactivate(component, currentRoute, currentState, nextState)).toBeFalse();
  });
});
