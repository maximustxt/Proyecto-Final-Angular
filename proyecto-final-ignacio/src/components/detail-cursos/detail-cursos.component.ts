import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

//*- Services:
import { CursosService } from 'src/Services/Cursos/cursos.service';

//*- Interfaces :
import { ICursos } from 'src/common/Interfaces';

@Component({
  selector: 'app-detail-cursos',
  templateUrl: './detail-cursos.component.html',
  styleUrls: ['./detail-cursos.component.scss'],
})
export class DetailCursosComponent {
  constructor(
    private activetedRouter: ActivatedRoute,
    private servicesCursos: CursosService
  ) {}

  Curso!: ICursos;
  SuscriptionCurso!: Subscription;

  ngOnInit(): void {
    this.SuscriptionCurso = this.servicesCursos
      .getDetailCurso(this.activetedRouter.snapshot.params['id'])
      .subscribe((value: any) => {
        this.Curso = value;
      });
  }

  ngOnDestroy(): void {
    this.SuscriptionCurso.unsubscribe();
  }
}
