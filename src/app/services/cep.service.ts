import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  private apiUrl = 'https://viacep.com.br/ws/'; // URL to cep API
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** Get Endereço from the server  */
  getEndereco(cep: number){
    const url = `${this.apiUrl}/${cep}/json`;
    return this.http.get(url)
  }
}
