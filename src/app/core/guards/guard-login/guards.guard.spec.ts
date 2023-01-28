import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { GuardsGuard } from './guards.guard';

describe('GuardsGuard', () => {
  let guard: GuardsGuard;

  let route: ActivatedRouteSnapshot
  let state: RouterStateSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be created', () => {
    expect(guard.canActivate(route, state)).toBeTruthy();
  });

});
