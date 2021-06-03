import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { tap } from 'rxjs/operators';
import { log } from 'util';
import { PersonaSencilla } from '../PersonaSencilla';
// import {PERSONAS} from '../personas.json';

@Component({
	selector: 'app-personas-listado',
	templateUrl: './personas-listado.component.html',
	styleUrls: [],
})
export class PersonasListadoComponent implements OnInit {
	personas: PersonaSencilla[] = [];

	mostrar = true;

	constructor(private service: PersonaService) {}

	ngOnInit(): void {
		this.darListado();
	}

	darListado(): void {
		this.service.getListado().subscribe((listado) => (this.personas = listado));
	}

	cambiarEstado(): void {
		this.mostrar = !this.mostrar;
	}
}
