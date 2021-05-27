import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../persona.service';
import {abstractFacuTipo, Resumen} from '../Resumen';

@Component({
  selector: 'app-listado-posibles-facultades',
  templateUrl: './listado-posibles-facultades.component.html',
  styleUrls: []
})
export class ListadoPosiblesFacultadesComponent implements OnInit {


  listado: Resumen[] = [];

  facutipos: abstractFacuTipo[] = [];

  titulo = 'Listado de estudiantes';

  total = 0;

  constructor(private service: PersonaService) { }

  ngOnInit(): void {
    this.getByFacultadPersonasPosibles();
  }

  getByFacultadPersonasPosibles(): void {
    this.service.getByFacultadPersonasPosibles().subscribe(listado => {
      this.listado = listado.Lista;
      this.listado.forEach(elent => {
        const datos = elent.etiqueta.split('-');
        this.facutipos.push(new abstractFacuTipo(elent.cantidad,datos[0],datos[1]));
        this.total += elent.cantidad;
      })
    } );
  }
}
