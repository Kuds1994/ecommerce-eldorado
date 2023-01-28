import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDummy } from '../../models/product_dummy';
import { ResponseAPI } from '../../models/response_api';

@Injectable({
  providedIn: 'root'
})
export class ProductDaoService {

  constructor(private http: HttpClient) { }

  readonly apiUrl = 'https://dummyjson.com';

  public getProducs(){
    return this.http.get<ResponseAPI>(`${this.apiUrl}/products`)
  }

  public getProducsById(id: number){
    return this.http.get<ProductDummy>(`${this.apiUrl}/products/${id}`)
  }
}
