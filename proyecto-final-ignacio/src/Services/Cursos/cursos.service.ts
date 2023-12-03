import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_PRODUCCION } from 'src/Enviroments/URL_PRODUCCION';
import { ICursos } from 'src/common/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private http: HttpClient) {}

  getCursos() {
    return this.http.get<ICursos[]>(`${URL_PRODUCCION.baseUrl}/Cursos`);
  }

  getDetailCurso(id: string) {
    return this.http.get<ICursos>(`${URL_PRODUCCION.baseUrl}/Cursos/${id}`);
  }

  deleteCursos(ID: string) {
    return this.http.delete<ICursos[]>(
      `${URL_PRODUCCION.baseUrl}/Cursos/${ID}`
    );
  }

  postCursos(Curso: ICursos) {
    return this.http.post<ICursos[]>(`${URL_PRODUCCION.baseUrl}/Cursos`, Curso);
  }

  putCursos(ID: string, Curso: ICursos) {
    return this.http.put<ICursos>(
      `${URL_PRODUCCION.baseUrl}/Cursos/${ID}`,
      Curso
    );
  }
}
