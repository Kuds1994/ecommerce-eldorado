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

  public getProducts(){
    return this.http.get<ResponseAPI>(`${this.apiUrl}/products`)
  }

  public getProductsById(id: number){
    return this.http.get<ProductDummy>(`${this.apiUrl}/products/${id}`)
  }

  public getProductsByName(name: string){
    return this.http.get<ProductDummy[]>(`${this.apiUrl}/products/search?q=${name}`)
  }

  public getProductsByCategory(name: string){
    return this.http.get<ResponseAPI>(`${this.apiUrl}/products/category/${name}`)
  }

}
