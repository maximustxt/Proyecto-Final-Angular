import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
//* INTERFACES :
import { IAlumnos } from 'src/common/Interfaces';
//* SELECT DETAIL STUDENTS :
import { selectAlumnoDetail } from './pages/store/alumno-detail.selectors';
//* ACTIONS :
import { AlumnoDetailActions } from './pages/store/alumno-detail.actions';
//* STORE :
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-detail-alumno',
  templateUrl: './detail-alumno.component.html',
  styleUrls: ['./detail-alumno.component.scss'],
})
export class DetailAlumnoComponent implements OnInit, OnDestroy {
  constructor(private activetedRouter: ActivatedRoute, private store: Store) {}

  Alumno!: IAlumnos;
  SuscriptionAlumno!: Subscription;

  ngOnInit(): void {
    this.store.dispatch(
      AlumnoDetailActions.loadAlumnoDetails({
        id: this.activetedRouter.snapshot.params['id'],
      })
    );

    this.SuscriptionAlumno = this.store
      .select(selectAlumnoDetail)
      .subscribe((value: any) => {
        this.Alumno = value;
      });
  }

  ngOnDestroy(): void {
    this.SuscriptionAlumno.unsubscribe();
  }
}
