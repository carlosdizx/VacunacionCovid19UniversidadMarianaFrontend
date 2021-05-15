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
  private documento: number;

  private nombres: string;

  private apellidos: string;

  private fechaNacimiento: Date;

  private sangre: string;

  private correo: string;

  private celular: number;

  private tipo: Tipo;

  private eps: Eps[];

  private estado: Estado;

  private programa: Programa;
}
