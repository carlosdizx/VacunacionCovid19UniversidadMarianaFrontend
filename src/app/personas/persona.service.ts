import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persona} from './persona';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private urlEndpoint = 'http://localhost:8080/personas';

  constructor(private http: HttpClient, private router: Router) {  }

  darListado(): Observable<any>{
    return this.http
      .get(`${this.urlEndpoint}/all`);
  }

  getPersona(documento: number): Observable<any> {
    return this.http.get<Persona>(`${this.urlEndpoint}/${documento}`);
  }
}
