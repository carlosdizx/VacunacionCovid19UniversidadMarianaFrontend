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

  personas: PersonaSencilla[];

  titulo = 'Listado de estudiantes';

  constructor(private service: PersonaService,
              private router: Router,
              private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPersonaByTipo();
  }

  getPersonaByTipo(): void{
    this.activatedRouted.params.subscribe((params) => {
      const id = params[`id`];
      if (id) {
        this.service
          .getPersonaByTipo(id)
          .subscribe((listado) => this.personas = listado.Lista );
      }
    });
  }

  cambiarTitulo(indice: number): void{
    if (indice === 1){
      this.titulo = 'Listado de estudiantes';
    }
    else if (indice === 2){
      this.titulo = 'Listado de docentes';
    }
    else if (indice === 3){
      this.titulo = 'Listado de administrativos';
    }
    else {
      this.titulo = 'Listado de directivos';
    }
  }
}
