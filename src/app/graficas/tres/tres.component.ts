import { Component, OnInit } from '@angular/core';
import {GraficaUno, InfoUno} from '../graficaUno';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';
import {GraficasService} from '../graficas.service';
import {GraficaTres} from '../graficaTres';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: []
})
export class TresComponent implements OnInit {

  graficoTres: GraficaTres;

  infoUno: InfoUno[] =[];

  titulo: string;

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['Cantiadad de posibles asistentes por facultad'];
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
    this.service.getGraficaTres().subscribe(respuesta => {
      this.graficoTres = respuesta;
      this.infoUno.push({
        label: 'Educación',
        data: [this.graficoTres.Educación],
        backgroundColor: 'RED',
        hoverBackgroundColor: 'RED'
      });
      this.infoUno.push({
        label: 'HumanidadesSociales',
        data: [this.graficoTres.HumanidadesSociales],
        backgroundColor: 'GREEN',
        hoverBackgroundColor: 'GREEN'
      });
      this.infoUno.push({label: 'Salud', data: [this.graficoTres.Salud], backgroundColor: 'BLUE', hoverBackgroundColor: 'BLUE'});
      this.infoUno.push({
        label: 'Ingeniería',
        data: [this.graficoTres.Ingeniería],
        backgroundColor: 'ORANGE',
        hoverBackgroundColor: 'ORANGE'
      });
      this.infoUno.push({label: 'ContablesEconomicasFinancieras', data: [this.graficoTres.ContablesEconomicasFinancieras], backgroundColor: 'WHITE', hoverBackgroundColor: 'WHITE'});
      this.infoUno.push({label: 'Administración', data: [this.graficoTres.Administración], backgroundColor: 'BROWN', hoverBackgroundColor: 'BROWN'});
      this.infoUno.push({label: '', data: [0], backgroundColor: '', hoverBackgroundColor: ''},);
      this.infoUno.forEach(dato => this.barChartData.push(dato));
      this.barChartData.splice(0,1)
      this.titulo = respuesta.Total+' - 100%';
    });
    }
}
