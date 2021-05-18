import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';
import {GraficasService} from '../graficas.service';
import {GraficaUno} from '../graficaUno';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: []
})
export class UnoComponent implements OnInit {

  graficoUno: GraficaUno;

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['Administrativos', 'Estudiantes', 'Docentes', 'Directivos', 'Posibles', 'Total'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private service: GraficasService) { }

  ngOnInit(): void {
    this.getGraficaUno();
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  getGraficaUno(): void {
    this.service.getGraficaUno().subscribe(respuesta => {
      this.graficoUno = respuesta;
      this.barChartData.push({ data: [
        this.graficoUno.Administrativos,
        this.graficoUno.Estudiantes,
        this.graficoUno.Docentes,
        this.graficoUno.Directivos,
        this.graficoUno.Posibles,
        this.graficoUno.Total,
        ], label: 'Personas por tipo' });
      console.log(this.barChartLabels);
      this.barChartData.splice(0, 1);
    });
  }
}
