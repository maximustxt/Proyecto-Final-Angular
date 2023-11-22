import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
//* ACTIONS :
import { HomeActions } from './pages/store/home.actions';
//* INTERFACE :
import { ICursos } from 'src/common/Interfaces';
//* SELECTOR CURSOS :
import { selectCursosHome } from './pages/store/home.selectors';
//* ALERTS :
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  Cursos!: ICursos[];
  constructor(private store: Store, private toast: HotToastService) {
    this.store.dispatch(HomeActions.loadHomes());
    this.store.select(selectCursosHome).subscribe((cursos) => {
      this.Cursos = cursos;
    });
  }

  //* ALERT :

  AlertNoDisponible() {
    this.toast.warning(`Curso no disponible por el momento 😔`, {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  //* FUNCION INSCRIPCION :

  FuncInscripcion() {
    this.AlertNoDisponible();
  }
}
