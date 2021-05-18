import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private urlEndpoint = 'http://localhost:8080/personas/graficas';

  constructor(private http: HttpClient, private router: Router) {  }

  getGraficaUno(): Observable<any> {
    return this.http.get(`${this.urlEndpoint}/1`);
  }

  getGraficaDos(): Observable<any> {
    return this.http.get(`${this.urlEndpoint}/2`);
  }

  getGraficaTres(): Observable<any> {
    return this.http.get(`${this.urlEndpoint}/3`);
  }

  getGraficaCuatro(): Observable<any> {
    return this.http.get(`${this.urlEndpoint}/4`);
  }
}
