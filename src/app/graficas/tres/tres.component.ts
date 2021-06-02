import { Component, OnInit } from '@angular/core';
import { GraficaUno, InfoUno } from '../graficaUno';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { GraficasService } from '../graficas.service';
import { GraficaTres } from '../graficaTres';
import { Resumen } from '../../personas/Resumen';

@Component({
	selector: 'app-tres',
	templateUrl: './tres.component.html',
	styleUrls: [],
})
export class TresComponent implements OnInit {
	resumen: Resumen[] = [];

	titulo = 'Personas categorizadas por facultades, ademas, que pueden asistir a la Universidad (cuentan con primera dosis o ya estan vacunados)';

	barChartOptions: ChartOptions = {
		responsive: true,
	};

	public barChartLabels: Label[] = ['Tipo, cargos rol'];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartPlugins = [];

	public barChartData: ChartDataSets[] = [
		{
			label: 'desde 0',
			data: [0],
			backgroundColor: '',
			hoverBackgroundColor: '',
		},
	];

	private colores: string[] = ['PINK', 'RED', 'YELLOW', 'ORANGE', 'BLUE', 'GREEN'];

	constructor(private service: GraficasService) {}

	ngOnInit(): void {
		this.getGraficaTres();
		monkeyPatchChartJsTooltip();
		monkeyPatchChartJsLegend();
	}

	getGraficaTres(): void {
		this.service.getGraficaTres().subscribe((respuesta) => {
			this.resumen = respuesta.Resumen;
			this.resumen.forEach((item, index) => {
				console.log(index + 1 + '-' + item.etiqueta);
				this.barChartData.push({
					label: item.etiqueta,
					data: [item.cantidad],
					backgroundColor: this.colores[index],
					hoverBackgroundColor: this.colores[index],
				});
			});
		});
	}
}
