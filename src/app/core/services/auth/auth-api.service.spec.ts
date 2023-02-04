import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthApiService } from './auth-api.service';

describe('AuthApiService', () => {
  let service: AuthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(AuthApiService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    
  });
});
