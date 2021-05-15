import { Estado, Programa, Tipo} from './persona';

export class PersonaSencilla{
  documento: number;

  tipo: Tipo;

  estado: Estado;

  programa: Programa;

  constructor() {
    this.documento = 0;
    this.tipo = new Tipo();
    this.programa = new Programa();
    this.estado = new Estado();
  }
}
