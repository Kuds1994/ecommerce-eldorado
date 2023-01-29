import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { GuardsGuard } from './guards.guard';
import { LoginComponent } from 'src/app/pages/login/login.component';

describe('GuardsGuard', () => {
  let guard: GuardsGuard;

  let route: ActivatedRouteSnapshot
  let state: RouterStateSnapshot

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule .withRoutes(
        [{path: 'login', component: LoginComponent}]
      )]
    });
    guard = TestBed.inject(GuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should can activate route', () => {
    expect(guard.canActivate(route, state)).toBeFalse();
  });

});
