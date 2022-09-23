import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proprietario } from '../interface/proprietario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  private imoveisUrl = `${environment.imoveisUrl}/proprietario`; // URL to web API
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** Get Proprietario from the server  */
  getProprietario(imovelId: number): Observable<Proprietario[]>{
      const url = `${this.imoveisUrl}/${imovelId}`;
      return this.http.get<Proprietario[]>(url)
  }
}
