import {Eps, Estado, Persona, Programa, Tipo} from './persona';

export const PERSONAS: Persona[] = [
  {
    documento: 1082749257,
    nombres: 'CARLOS ERNESTO',
    apellidos: 'DIAZ BASANTE',
    fechaNacimiento: new Date(),
    sangre: 'B+',
    correo: 'carlodiaz@umariana.edu.co',
    celular: 3163930876,
    tipo: new Tipo(),
    eps: [
      new Eps()
    ]
    ,
    estado: new Estado(),
    programa: new Programa(1, 'Ing. de Sistemas')
  },
  {
    documento: 1010094599,
    nombres: 'NICOLAS SANTIAGO',
    apellidos: 'CHANA CHAMORRO',
    fechaNacimiento: new Date(),
    sangre: 'O+',
    correo: 'jujoherrera@umariana.edu.co',
    celular: 3008888111,
    tipo: new Tipo(),
    eps: [
      new Eps()
    ]
    ,
    estado: new Estado(),
    programa: new Programa(2, 'Ing. de Procesos')
  },
  {
    documento: 1004189851,
    nombres: 'OSCAR ALEJANDRO',
    apellidos: 'PANTOJA PANTOJA',
    fechaNacimiento: new Date(),
    sangre: 'O+',
    correo: 'jujoherrera@umariana.edu.co',
    celular: 3008888111,
    tipo: new Tipo(),
    eps: [
      new Eps()
    ]
    ,
    estado: new Estado(),
    programa: new Programa(2, 'Derecho')
  },
  {
    documento: 1085343497,
    nombres: 'LUIS CARLOS',
    apellidos: 'BENAVIDES BETANCOURT',
    fechaNacimiento: new Date(),
    sangre: 'A+',
    correo: 'jujoherrera@umariana.edu.co',
    celular: 3008888111,
    tipo: new Tipo(),
    eps: [
      new Eps()
    ]
    ,
    estado: new Estado(),
    programa: new Programa(2, 'Licenciatura en Matematicas')
  }
];
