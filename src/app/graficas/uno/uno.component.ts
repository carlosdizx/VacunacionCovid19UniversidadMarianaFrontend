import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { GraficasService } from '../graficas.service';
import { GraficaUno, InfoUno } from '../graficaUno';
import { Resumen } from '../../personas/Resumen';

@Component({
	selector: 'app-uno',
	templateUrl: './uno.component.html',
	styleUrls: [],
})
export class UnoComponent implements OnInit {
	resumen: Resumen[] = [];

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

	private colores: string[] = ['RED', 'BLUE', 'GREEN', 'YELLOW'];

	constructor(private service: GraficasService) {}

	ngOnInit(): void {
		this.getGraficaUno();
		monkeyPatchChartJsTooltip();
		monkeyPatchChartJsLegend();
	}

	getGraficaUno(): void {
		this.service.getGraficaUno().subscribe((respuesta) => {
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
