import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraficaCuatro } from '../graficaCuatro';
import { InfoUno } from '../graficaUno';
import { GraficasService } from '../graficas.service';

@Component({
	selector: 'app-cuatro',
	templateUrl: './cuatro.component.html',
	styleUrls: [],
})
export class CuatroComponent implements OnInit {
	graficaCuatro: GraficaCuatro[] = [];

	infoUnoE: InfoUno[] = [];
	infoUnoD: InfoUno[] = [];
	infoUnoA: InfoUno[] = [];
	infoUnoDI: InfoUno[] = [];

	public barChartOptions: ChartOptions = {
		responsive: true,
		scales: { xAxes: [{}], yAxes: [{}] },
		plugins: {
			datalabels: {
				anchor: 'end',
				align: 'end',
			},
		},
	};
	public barChartLabels: Label[] = [];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;

	public barChartData: ChartDataSets[] = [];

	constructor(private service: GraficasService) {}

	ngOnInit(): void {
		this.getGraficaCuatro();
	}

	// events
	public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	getGraficaCuatro(): void {
		this.service.getGraficaCuatro().subscribe((respuesta) => {
			this.graficaCuatro = respuesta.Lista;

			this.graficaCuatro.forEach((datos) => {
				if (datos.tipo === 'Estudiante') {
					this.infoUnoE.push({
						data: [datos.cantidad],
						label: datos.tipo + '-' + datos.estado,
						backgroundColor: 'RED',
						hoverBackgroundColor: 'RED',
					});
				} else if (datos.tipo === 'Docente') {
					this.infoUnoD.push({
						data: [datos.cantidad],
						label: datos.tipo + '-' + datos.estado,
						backgroundColor: 'BLUE',
						hoverBackgroundColor: 'BLUE',
					});
				} else if (datos.tipo === 'Directivo') {
					this.infoUnoDI.push({
						data: [datos.cantidad],
						label: datos.tipo + '-' + datos.estado,
						backgroundColor: 'GREEN',
						hoverBackgroundColor: 'GREEN',
					});
				} else {
					this.infoUnoA.push({
						data: [datos.cantidad],
						label: datos.tipo + '-' + datos.estado,
						backgroundColor: 'YELLOW',
						hoverBackgroundColor: 'YELLOW',
					});
				}
			});
			this.infoUnoE.forEach((datos) => this.barChartData.push(datos));
			this.infoUnoD.forEach((datos) => this.barChartData.push(datos));
			this.infoUnoA.forEach((datos) => this.barChartData.push(datos));
			this.infoUnoDI.forEach((datos) => this.barChartData.push(datos));
			this.barChartData.splice(0, 1);
			this.barChartData.push({
				data: [0],
				label: '',
				backgroundColor: 'DARK',
				hoverBackgroundColor: 'DARK',
			});
		});
	}
}
