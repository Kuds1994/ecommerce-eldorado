import { TestBed } from '@angular/core/testing';

import { LeavingCartGuard } from './leaving-cart.guard';

describe('LeavingCartGuard', () => {
  let guard: LeavingCartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeavingCartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
