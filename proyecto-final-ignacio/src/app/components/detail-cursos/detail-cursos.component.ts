import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

//*- Services:
import { CursosService } from 'src/Services/Cursos/cursos.service';

//*- Interfaces :
import { ICursos } from 'src/common/Interfaces';
//* ACTIONS :
import { CursosDetailActions } from './pages/store/cursos-detail.actions';
//* SELECT COURSES DETAIL :
import { selectCursosDetail } from './pages/store/cursos-detail.selectors';

@Component({
  selector: 'app-detail-cursos',
  templateUrl: './detail-cursos.component.html',
  styleUrls: ['./detail-cursos.component.scss'],
})
export class DetailCursosComponent {
  constructor(
    private activetedRouter: ActivatedRoute,
    private servicesCursos: CursosService,
    private store: Store
  ) {}

  Curso!: ICursos;
  SuscriptionCurso!: Subscription;

  ngOnInit(): void {
    this.store.dispatch(
      CursosDetailActions.loadCursosDetails({
        id: this.activetedRouter.snapshot.params['id'],
      })
    );

    this.SuscriptionCurso = this.store
      .select(selectCursosDetail)
      .subscribe((value: any) => {
        this.Curso = value;
      });
  }

  ngOnDestroy(): void {
    this.SuscriptionCurso.unsubscribe();
  }
}
