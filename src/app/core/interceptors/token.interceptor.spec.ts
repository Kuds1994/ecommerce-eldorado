import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {

  let request: HttpRequest<unknown>
  let next: HttpHandler

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor, HttpHandler, HttpClient
      ]
  }));

  it('should intercept Http requisitions', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);

    spyOn(interceptor, 'intercept')

    interceptor.intercept(request, next)

    expect(interceptor.intercept).toHaveBeenCalled();
  });

});
