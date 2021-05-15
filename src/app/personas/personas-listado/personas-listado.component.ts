import { Component, OnInit } from '@angular/core';
import {Persona} from '../persona';
import {PERSONAS} from '../personas.json';

@Component({
  selector: 'app-personas-listado',
  templateUrl: './personas-listado.component.html',
  styleUrls: []
})
export class PersonasListadoComponent implements OnInit {

  personas: Persona[];

  constructor() {
  }

  ngOnInit(): void {
    this.personas = PERSONAS;
  }

}
