import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  readonly API_URL = "https://dummyjson.com"

  login(username: string, password: string){
    //kminchelle - login
    //0lelplR - senha
    return this.http.post<any>(`${this.API_URL}/auth/login`, {'username':username, 'password':password})

  }

  testAuthorization(){
    //kminchelle - login
    //0lelplR - senha
    return this.http.get<any>(`https://dummyjson.com/auth/users`)

  }
}
