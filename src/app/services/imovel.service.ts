import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Imovel } from '../interface/imovel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private imoveisUrl = `${environment.imoveisUrl}/imovel`; // URL to web API
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** Get Imóveis from the server  */
  getImoveis(): Observable<Imovel[]>{
    return this.http.get<Imovel[]>(this.imoveisUrl)
  }
  
}
