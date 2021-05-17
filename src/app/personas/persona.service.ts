import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persona} from './persona';
import {Router} from '@angular/router';
import {PersonaSencilla} from './PersonaSencilla';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //                     http://localhost:8080/personas/tipos/1
  private urlEndpoint = 'http://localhost:8080/personas';

  constructor(private http: HttpClient, private router: Router) {  }

  getListado(): Observable<PersonaSencilla[]>{
    return this.http
      .get<PersonaSencilla[]>(`${this.urlEndpoint}/all`);
  }

  getListado2(): Observable<PersonaSencilla[]>{
    return this.http
      .get<PersonaSencilla[]>(`${this.urlEndpoint}/2all`);
  }

  getPersona(documento: number): Observable<any> {
    return this.http.get<Persona>(`${this.urlEndpoint}/${documento}`);
  }

  getPersonaByTipo(id: number): Observable<any> {
    return this.http.get<PersonaSencilla[]>(`${this.urlEndpoint}/tipos/${id}`)
      ;
  }
}
