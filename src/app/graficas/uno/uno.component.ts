import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';
import {GraficasService} from '../graficas.service';
import {GraficaUno, InfoUno} from '../graficaUno';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: []
})
export class UnoComponent implements OnInit {

  graficoUno: GraficaUno;

  infoUno: InfoUno[] =[];

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['Tipo, cargos rol'];
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
      this.infoUno.push({label: 'Administrativos', data: [this.graficoUno.Administrativos],backgroundColor: 'RED', hoverBackgroundColor: 'RED'});
      this.infoUno.push({label: 'Estudiantes', data: [this.graficoUno.Estudiantes],backgroundColor: 'GREEN', hoverBackgroundColor: 'GREEN'});
      this.infoUno.push({label: 'Docentes', data: [this.graficoUno.Docentes],backgroundColor: 'BLUE', hoverBackgroundColor: 'BLUE'});
      this.infoUno.push({label: 'Directivos', data: [this.graficoUno.Directivos],backgroundColor: 'ORANGE', hoverBackgroundColor: 'ORANGE'});
      this.infoUno.push({label: 'Posibles', data: [this.graficoUno.Posibles],backgroundColor: 'WHITE', hoverBackgroundColor: 'WHITE'});
      this.infoUno.push({label: '', data: [0],backgroundColor: '', hoverBackgroundColor: ''},);
      console.log(this.infoUno);
      this.infoUno.forEach(dato => this.barChartData.push(dato));
      this.barChartData.splice(0,1)
      console.log(this.barChartData);
    });
  }
}
