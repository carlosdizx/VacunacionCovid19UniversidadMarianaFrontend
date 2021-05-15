export class Tipo {
  id: number;

  nombre: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
  }
}

export class Eps {
  id: number;

  nombre: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
  }
}

export class Estado {
  id: number;

  nombre: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
  }
}

export class Programa {
  id: number;

  nombre: string;


    constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

export class Persona{
  documento: number;

  nombres: string;

  apellidos: string;

  fechaNacimiento: Date;

  sangre: string;

  correo: string;

  celular: number;

  tipo: Tipo;

  eps: Eps[];

  estado: Estado;

  programa: Programa;
}
