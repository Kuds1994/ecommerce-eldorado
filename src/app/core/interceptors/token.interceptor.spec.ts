import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {

  let request: HttpRequest<unknown>
  let next: HttpHandler

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor, HttpHandler, HttpClient
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });

});
