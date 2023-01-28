import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should user and password be valid', () => {
    
    expect(service.login('Eduardo', 'asd')).toBeTruthy();

  });

  it('should browser get token in local storage', () => {
    


    expect(service.getUser()).toBe('Eduardo');

  });
});
