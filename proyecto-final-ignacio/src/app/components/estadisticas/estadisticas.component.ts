import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

//* ACTIONS DE REDUX :
import {
  EstadisticasActionsAdministradores,
  EstadisticasActionsAlumnos,
  EstadisticasActionsCursos,
} from './Page/store/estadisticas.actions';

//* SELECTORES DE REDUX :
import {
  selectEstadisticasAdministradores,
  selectEstadisticasAlumnos,
  selectEstadisticasCursos,
} from './Page/store/estadisticas.selectors';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
})
export class EstadisticasComponent {
  Contador: number = 0;

  //* DATOS DE ESTADISTICA DE CURSOS :

  NombresCursosParaEstadisticas: string[] = [];
  CantidadDeCursos: number[] = [];

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ data: [], label: 'Vacantes De Los Cursos' }],
  };

  //* DATOS ESTADISTICA ADMIN :

  NombreDeAdministradores: string[] = [];
  CantidadDeAdministradores: number[] = [];

  barChartDataAdministradores: ChartData<'bar'> = {
    labels: [],
    datasets: [{ data: [], label: 'Cantidad de Administradores' }],
  };

  //* DATOS DE ESTADISTICAS DE ESTUDIANTES :

  NombreDeLosEstudiantes: string[] = [];
  EdadesEstudiantes: number[] = [];

  barChartDataAlumnos: ChartData<'bar'> = {
    labels: [],
    datasets: [{ data: [], label: 'Rango De Edades' }],
  };
  //--------------------------------------//

  barChartType: ChartType = 'bar';

  constructor(public dialog: MatDialog, private store: Store) {
    //************** CONFIGURACION DE ESTADISTICAS ***************//

    //* ESTADISTICA CURSOS :

    this.store.dispatch(EstadisticasActionsCursos.loadEstadisticassCursos());

    this.store.select(selectEstadisticasCursos).subscribe((date) => {
      date.map((e) => {
        this.NombresCursosParaEstadisticas.push(e.nombre);
        this.CantidadDeCursos.push(e.vacantes);
      });

      this.barChartData = {
        labels: this.NombresCursosParaEstadisticas,
        datasets: [
          {
            data: this.CantidadDeCursos,
            label: 'Vacantes De Los Cursos',
          },
        ],
      };
    });

    //* ESTADISTICA ALUMNOS :

    this.store.dispatch(EstadisticasActionsAlumnos.loadEstadisticassAlumnos());

    this.store.select(selectEstadisticasAlumnos).subscribe((date) => {
      date.map((e) => {
        this.NombreDeLosEstudiantes.push(e.nombre);
        this.EdadesEstudiantes.push(e.edad);
      });

      this.barChartDataAlumnos = {
        labels: this.NombreDeLosEstudiantes,
        datasets: [
          {
            data: this.EdadesEstudiantes,
            label: 'Rango De Edades',
          },
        ],
      };
    });

    //* ESTADISTICA ADMINISTRADORES :

    this.store.dispatch(
      EstadisticasActionsAdministradores.loadEstadisticassAdministradores()
    );

    this.store
      .select(selectEstadisticasAdministradores)
      .subscribe((date: any) => {
        date.map((e: any) => {
          this.NombreDeAdministradores.push(e.nombre);
          this.Contador++;
          this.CantidadDeAdministradores.push(this.Contador);
        });

        this.barChartDataAdministradores = {
          labels: this.NombreDeAdministradores,
          datasets: [
            {
              data: this.CantidadDeAdministradores,
              label: 'Cantidad de Administradores',
            },
          ],
        };
      });
  }

  //******************************** ESTADISTICAS ********************************//

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  public barChartPlugins = [DataLabelsPlugin];

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {}

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {}
}
