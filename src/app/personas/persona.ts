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

    constructor() {
    this.id = 0;
    this.nombre = '';
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

  constructor() {
    this.documento = 0;
    this.nombres = '';
    this.apellidos = '';
    this.fechaNacimiento = new Date();
    this.sangre = '';
    this.correo = '';
    this.celular = 0;
    this.tipo = new Tipo();
    this.eps = [];
    this.estado = new Estado();
    this.programa = new Programa();
  }

  getDocuemento(): number{
    return this.documento;
  }
}
