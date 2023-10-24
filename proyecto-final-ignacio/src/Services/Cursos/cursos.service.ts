import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICursos } from 'src/common/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private http: HttpClient) {}

  getCursos() {
    return this.http.get(
      `https://servidor-proyecto-final-angular.onrender.com/Cursos`
    );
  }

  getDetailCurso(id: string) {
    return this.http.get(
      `https://servidor-proyecto-final-angular.onrender.com/Cursos/${id}`
    );
  }

  deleteCursos(ID: string) {
    return this.http.delete(
      `https://servidor-proyecto-final-angular.onrender.com/Cursos/${ID}`
    );
  }

  postCursos(Curso: ICursos) {
    return this.http.post(
      `https://servidor-proyecto-final-angular.onrender.com/Cursos`,
      Curso
    );
  }

  putCursos(ID: string, Curso: ICursos) {
    return this.http.put(
      `https://servidor-proyecto-final-angular.onrender.com/Cursos/${ID}`,
      Curso
    );
  }
}
