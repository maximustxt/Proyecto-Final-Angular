import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_PRODUCCION } from 'src/Enviroments/URL_PRODUCCION';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  constructor(private http: HttpClient) {}

  PostInscripciones(idAlumno: string, idsCursos: string[]) {
    return this.http.post(`${URL_PRODUCCION.baseUrl}/CursosDeLosAlumnos`, {
      idAlumno,
      idsCursos,
    });
  }

  GetInscripcionesDelAlumno(idAlumno: string) {
    return this.http.get(
      `${URL_PRODUCCION.baseUrl}/CursosDeLosAlumnos/${idAlumno}`
    );
  }

  DeleteInscripcionesDelAlumno(
    idAlumno: string | undefined,
    nameCursos: string[]
  ) {
    const nameCursosStr = nameCursos.join(',');

    return this.http.delete(
      `${URL_PRODUCCION.baseUrl}/CursosDeLosAlumnos/${idAlumno}?nameCursos=${nameCursosStr}`
    );
  }

  PutInscripcionesDelAlumno(idAlumno: string, idCursos: string[]) {
    return this.http.put(
      `${URL_PRODUCCION.baseUrl}/CursosDeLosAlumnos/${idAlumno}`,
      {
        value: idCursos,
      }
    );
  }
}
