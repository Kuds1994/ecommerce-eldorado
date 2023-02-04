import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductDaoService } from './product-dao.service';

describe('ProductDaoService', () => {
  let service: ProductDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ProductDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
