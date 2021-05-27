import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persona} from './persona';
import {Router} from '@angular/router';
import {PersonaSencilla} from './PersonaSencilla';
import {ResumenFacultad} from './resumenFacultad';
import {tap} from 'rxjs/operators';

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
      .get<PersonaSencilla[]>(`${this.urlEndpoint}/all/estadoPrograma`);
  }

  getListado2(): Observable<PersonaSencilla[]>{
    return this.http
      .get<PersonaSencilla[]>(`${this.urlEndpoint}/all/tipoEstado`);
  }

  getPersona(documento: number): Observable<any> {
    return this.http.get<Persona>(`${this.urlEndpoint}/${documento}`);
  }

  getPersonaByTipo(id: number): Observable<any> {
    return this.http.get<PersonaSencilla[]>(`${this.urlEndpoint}/tipos/${id}`)
      ;
  }

  getPersoonasPosibleAsistencia(): Observable<any>{
    return this.http.get<PersonaSencilla[]>(`${this.urlEndpoint}/posibles`);
  }

  getPosiblesFacultades(): Observable<any>{
    return this.http.get<PersonaSencilla[]>(`${this.urlEndpoint}/posibles`);
  }

  getByFacultadPersonasPosibles(): Observable<any>{
    let total = 0;
    return this.http.get<ResumenFacultad[]>(`${this.urlEndpoint}/posiblesFacultades`).pipe(
      tap(respuesta => {
        respuesta.Lista.forEach(resumen => {
          total = total + resumen.cantidad;
        });
        console.log('total: ' + total);
      })
    );
  }
}
