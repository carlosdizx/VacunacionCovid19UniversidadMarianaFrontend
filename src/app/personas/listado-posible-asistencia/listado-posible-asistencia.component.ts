import { Component, OnInit } from '@angular/core';
import {PersonaSencilla} from '../PersonaSencilla';
import {PersonaService} from '../persona.service';

@Component({
  selector: 'app-listado-posible-asistencia',
  templateUrl: './listado-posible-asistencia.component.html',
  styleUrls: []
})
export class ListadoPosibleAsistenciaComponent implements OnInit {

  personas: PersonaSencilla[] = [];

  titulo = 'Listado de personas que podrian asistir a la Universidad Mariana sin correr riesgo de contagio';

  constructor(private service: PersonaService) { }

  ngOnInit(): void {
    this.getPersoonasPosibleAsistencia();
  }

  getPersoonasPosibleAsistencia(): void{
    this.service.getPersoonasPosibleAsistencia().subscribe(
      listado => this.personas = listado.Lista
    );
  }

}
