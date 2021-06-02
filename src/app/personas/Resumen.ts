export class Resumen {
	etiqueta: string;
	cantidad: number;
	constructor() {
		this.etiqueta = '';
		this.cantidad = 0;
	}
}
export class abstractFacuTipo {
	cantidad: number;
	facultad: string;
	tipo: string;

	constructor(cantidad: number, facultad: string, tipo: string) {
		this.cantidad = cantidad;
		this.facultad = facultad;
		this.tipo = tipo;
	}
}
