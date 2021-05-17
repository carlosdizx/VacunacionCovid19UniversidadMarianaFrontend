import { Component, OnInit } from '@angular/core';
import {PersonaSencilla} from '../PersonaSencilla';
import {PersonaService} from '../persona.service';

@Component({
  selector: 'app-listado-situacion',
  templateUrl: './listado-situacion.component.html',
  styleUrls: []
})
export class ListadoSituacionComponent implements OnInit {

  personas: PersonaSencilla[] = [];

  desconocidos: PersonaSencilla[] = [];

  contagiados: PersonaSencilla[] = [];

  saludables: PersonaSencilla[] = [];

  preContagiados: PersonaSencilla[] = [];

  preVacunados: PersonaSencilla[] = [];

  vacunados: PersonaSencilla[] = [];

  titulo = 'Listado de personas en estado/situacion: (Desconocido)';

  indice = 1;

  constructor(private service: PersonaService){}

  ngOnInit(): void {
    this.getListado();
  }

  getListado(): void{
    this.service
      .getListado2()
      .subscribe((listado) => {
        this.personas = listado;
        for ( const persona of this.personas){
          if (persona.estado.id === 1){
            this.desconocidos.push(persona);
          }
          else if (persona.estado.id === 2){
            this.contagiados.push(persona);
          }
          else if (persona.estado.id === 3){
            this.saludables.push(persona);
          }
          else if (persona.estado.id === 4){
            this.preContagiados.push(persona);
          }
          else if (persona.estado.id === 5){
            this.preVacunados.push(persona);
          }
          else {
            this.vacunados.push(persona);
          }
        }
      }  );
  }

  cambiarTitulo(indice: number): void{
    if (indice === 1){
      this.titulo = 'Listado de personas en estado/situacion: (Desconocido)';
      this.indice = 1;
    }
    else if (indice === 2){
      this.titulo = 'Listado de personas en estado/situacion: (Contagio)';
      this.indice = 2;
    }
    else if (indice === 3){
      this.titulo = 'Listado de personas en estado/situacion: (Saludable)';
      this.indice = 3;
    }
    else if (indice === 4) {
      this.titulo = 'Listado de personas en estado/situacion: (Anteriormente contagiado)';
      this.indice = 4;
    }
    else if (indice === 5) {
      this.titulo = 'Listado de personas en estado/situacion: (Primera dosis aplicada, pendiente segunda)';
      this.indice = 5;
    }
    else {
      this.titulo = 'Listado de personas en estados/situacion: (Vacunado)';
      this.indice = 6;
    }
  }

}
