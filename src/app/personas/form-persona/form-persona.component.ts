import { Component, OnInit } from '@angular/core';
import {Eps, Persona} from '../persona';
import {PersonaService} from '../persona.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  persona: Persona = new Persona();

  listadoEps: Eps[];

  constructor(private service: PersonaService,
              private router: Router,
              private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona(): void{
    this.activatedRouted.params.subscribe((params) => {
      const documento = params[`id`];
      if (documento) {
        this.service
          .getPersona(documento)
          .subscribe((persona) => {
            this.persona = persona.Persona;
            this.listadoEps = persona.Persona.epss;
          });
      }
    });
  }

}
