import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  readonly apiUrl = 'https://viacep.com.br/ws/';

  public getCEP(cep: string){
    return this.http.get<any>(this.apiUrl + cep + '/json');
  }
}
