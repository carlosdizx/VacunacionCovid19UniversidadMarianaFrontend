import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persona} from './persona';
import {map, tap} from 'rxjs/operators';
import {PersonaSencilla} from './PersonaSencilla';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private urlEndpoint = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) {  }

  // resp[0].forEach(persona=>{persona.forEach(propiedad => console.log(propiedad) })
  darListado(): Observable<any>{
    return this.http
      .get(`${this.urlEndpoint}/all`);
    /*
     * .pipe(
     tap((response) => {
          (response.content as PersonaSencilla[]).forEach((persona) => {
            console.log(persona.documento);
          });
        })
        * );
     */
  }
}
