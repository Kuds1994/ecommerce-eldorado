import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from 'src/app/pages/login/login.component';

import { GuardAdminGuard } from './guard-admin.guard';

describe('GuardAdminGuard', () => {
  let guard: GuardAdminGuard;

  let route: ActivatedRouteSnapshot
  let state: RouterStateSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule.withRoutes(
        [{path: 'login', component: LoginComponent}]
      )]
    });
    guard = TestBed.inject(GuardAdminGuard);
  });

  it('should can activate route', () => {

    guard.canActivate(route, state)

    expect(guard.canActivate(route, state)).toBeFalse();
  });
});
