import { Component, OnInit } from '@angular/core';
import {InfoUno} from '../graficaUno';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';
import {GraficasService} from '../graficas.service';
import {GraficaDos} from '../graficaDos';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: []
})
export class DosComponent implements OnInit {

  graficoDos: GraficaDos;

  infoUno: InfoUno[] =[];

  titulo = '';

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };

  public barChartLabels: Label[] = ['Estados / Situacion de las personas'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private service: GraficasService) { }

  ngOnInit(): void {
    this.getGraficaDos();
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  getGraficaDos(): void {
    this.service.getGraficaDos().subscribe(respuesta =>{
      this.graficoDos = respuesta;
      this.infoUno = [{label: 'Desconocidos', data: [this.graficoDos.Desconocidos],backgroundColor: 'VIOLET', hoverBackgroundColor: 'VIOLET'}];
      this.infoUno.push({label: 'Contagiados', data: [this.graficoDos.Contagiados],backgroundColor: 'RED', hoverBackgroundColor: 'RED'});
      this.infoUno.push({label: 'Saludables', data: [this.graficoDos.Saludables],backgroundColor: 'YELLOW', hoverBackgroundColor: 'YELLOW'});
      this.infoUno.push({label: 'PreContagiados', data: [this.graficoDos.PreContagiados],backgroundColor: 'ORANGE', hoverBackgroundColor: 'ORANGE'});
      this.infoUno.push({label: 'PreVacunados', data: [this.graficoDos.PreVacunados],backgroundColor: 'BLUE', hoverBackgroundColor: 'BLUE'});
      this.infoUno.push({label: 'Vacunados', data: [this.graficoDos.Vacunados],backgroundColor: 'GREEN', hoverBackgroundColor: 'GREEN'});
      this.infoUno.push({label: '', data: [0],backgroundColor: '', hoverBackgroundColor: ''},);
      let total = 0;
      this.infoUno.forEach(numero => numero.data.forEach(iten => {
        return total += iten;
      }))
      this.infoUno = [{label: 'Desconocidos '+((Math.floor(this.graficoDos.Desconocidos*100)/total)).toFixed(2)+'%', data: [this.graficoDos.Desconocidos],backgroundColor: 'VIOLET', hoverBackgroundColor: 'VIOLET'}];
      this.infoUno.push({label: 'Contagiados '+(Math.floor(this.graficoDos.Contagiados*100)/total).toFixed(2)+'%', data: [this.graficoDos.Contagiados],backgroundColor: 'RED', hoverBackgroundColor: 'RED'});
      this.infoUno.push({label: 'Saludables '+(Math.floor(this.graficoDos.Saludables*100)/total).toFixed(2)+'%', data: [this.graficoDos.Saludables],backgroundColor: 'YELLOW', hoverBackgroundColor: 'YELLOW'});
      this.infoUno.push({label: 'PreContagiados '+(Math.floor(this.graficoDos.PreContagiados*100)/total).toFixed(2)+'%', data: [this.graficoDos.PreContagiados],backgroundColor: 'ORANGE', hoverBackgroundColor: 'ORANGE'});
      this.infoUno.push({label: 'PreVacunados '+(Math.floor(this.graficoDos.PreVacunados*100)/total).toFixed(2)+'%', data: [this.graficoDos.PreVacunados],backgroundColor: 'BLUE', hoverBackgroundColor: 'BLUE'});
      this.infoUno.push({label: 'Vacunados '+(Math.floor(this.graficoDos.Vacunados*100)/total).toFixed(2)+'%', data: [this.graficoDos.Vacunados],backgroundColor: 'GREEN', hoverBackgroundColor: 'GREEN'});
      this.infoUno.push({label: '', data: [0],backgroundColor: '', hoverBackgroundColor: ''},);
      this.titulo = 'Total personas: ('+total+' - 100%)';
      this.infoUno.forEach(dato => this.barChartData.push(dato));
      this.barChartData.splice(0,1);
    });
  }

}
