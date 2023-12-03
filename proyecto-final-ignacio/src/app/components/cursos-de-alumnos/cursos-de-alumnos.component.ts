import { Component } from '@angular/core';
import { InscripcionesService } from 'src/Services/Inscripciones/inscripciones.service';
import ObtenerAlumno from '../LocalStorage/Alumnos/ObtenerAlumno';
import { ICursos } from 'src/common/Interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-de-alumnos',
  templateUrl: './cursos-de-alumnos.component.html',
  styleUrls: ['./cursos-de-alumnos.component.scss'],
})
export class CursosDeAlumnosComponent {
  Cursos: ICursos[] = [];
  constructor(
    private servicesInscripciones: InscripcionesService,
    private router: Router
  ) {
    this.servicesInscripciones
      .GetInscripcionesDelAlumno(ObtenerAlumno()._id)
      .subscribe((date: any) => {
        // Utilizamos un conjunto (Set) para evitar cursos duplicados
        const cursosSet = new Set<string>();

        // Filtramos los cursos duplicados y los agregamos al conjunto
        this.Cursos = date.filter((curso: ICursos) => {
          if (curso._id) {
            const cursoId = curso._id.toString();
            if (!cursosSet.has(cursoId)) {
              cursosSet.add(cursoId);
              return true;
            }
          }
          return false;
        });
      });
  }

  VerCurso(id: string | undefined) {
    if (id) {
      this.router.navigate(['DetailCursos', id]);
    }
  }
}
