import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss'],
})
export class InscripcionesComponent implements OnInit, OnDestroy {
  constructor(private ServicesAlumnos: AlumnosService) {}
  AlumnosInscriptos: any[] = [];
  Suscription: Subscription = new Subscription();

  dataSource = new MatTableDataSource(this.AlumnosInscriptos);
  displayedColumns: string[] = ['Alumno', 'Curso Inscripto'];

  ngOnInit(): void {
    this.Suscription = this.ServicesAlumnos.getAlumnos().subscribe(
      (value: any) => {
        this.AlumnosInscriptos = value;
        this.dataSource = new MatTableDataSource(this.AlumnosInscriptos);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.Suscription.unsubscribe();
  }
}
