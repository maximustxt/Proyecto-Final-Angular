import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlumnosService } from 'src/Services/Alumnos/alumnos.service';
import { IAlumnos } from 'src/common/Interfaces';

@Component({
  selector: 'app-detail-alumno',
  templateUrl: './detail-alumno.component.html',
  styleUrls: ['./detail-alumno.component.scss'],
})
export class DetailAlumnoComponent implements OnInit, OnDestroy {
  constructor(
    private activetedRouter: ActivatedRoute,
    private servicesAlumnos: AlumnosService
  ) {}

  Alumno!: IAlumnos;
  SuscriptionAlumno!: Subscription;

  ngOnInit(): void {
    this.SuscriptionAlumno = this.servicesAlumnos
      .getDetailAlumno(this.activetedRouter.snapshot.params['id'])
      .subscribe((value: any) => {
        this.Alumno = value;
      });
  }

  ngOnDestroy(): void {
    this.SuscriptionAlumno.unsubscribe();
  }
}
