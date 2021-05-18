import { Component, OnInit } from '@angular/core';
import {PersonaSencilla} from '../PersonaSencilla';
import {PersonaService} from '../persona.service';
import {ResumenFacultad} from '../resumenFacultad';

@Component({
  selector: 'app-listado-posibles-facultades',
  templateUrl: './listado-posibles-facultades.component.html',
  styleUrls: []
})
export class ListadoPosiblesFacultadesComponent implements OnInit {


  listado: ResumenFacultad[] = [];

  titulo = 'Listado de estudiantes';

  total = 0;

  constructor(private service: PersonaService) { }

  ngOnInit(): void {
    this.getByFacultadPersonasPosibles();
  }

  getByFacultadPersonasPosibles(): void {
    this.service.getByFacultadPersonasPosibles().subscribe(listado => {
      this.listado = listado.Lista;
      for (const r of this.listado){
        this.total += r.cantidad;
      }
    } );
  }
}
