import { Component, OnInit } from '@angular/core';
import {PersonaSencilla} from '../PersonaSencilla';
import {PersonaService} from '../persona.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-listado-tipo',
  templateUrl: './listado-tipo.component.html',
  styleUrls: ['./listado-tipo.component.css']
})
export class ListadoTipoComponent implements OnInit {

  personas: PersonaSencilla[] = [];

  estudiantes: PersonaSencilla[] = [];

  docentes: PersonaSencilla[] = [];

  administrativos: PersonaSencilla[] = [];

  directivos: PersonaSencilla[] = [];

  titulo = 'Listado de estudiantes';

  indice = 1;

  constructor(private service: PersonaService){}

  ngOnInit(): void {
    this.getListado();
  }

  getListado(): void{
    this.service
      .getListado()
      .subscribe((listado) => {
        this.personas = listado;
        for ( const persona of this.personas){
          console.log(persona.tipo.id);
          if (persona.tipo.id === 1){
            this.estudiantes.push(persona);
          }
          else if (persona.tipo.id === 2){
            this.docentes.push(persona);
          }
          else if (persona.tipo.id === 3){
            this.administrativos.push(persona);
          }
          else{
            this.directivos.push(persona);
          }
        }
      }  );
  }

  cambiarTitulo(indice: number): void{
    if (indice === 1){
      this.titulo = 'Listado de estudiantes';
      this.indice = 1;
    }
    else if (indice === 2){
      this.titulo = 'Listado de docentes';
      this.indice = 2;
    }
    else if (indice === 3){
      this.titulo = 'Listado de administrativos';
      this.indice = 3;
    }
    else {
      this.titulo = 'Listado de directivos';
      this.indice = 4;
    }
  }
}
