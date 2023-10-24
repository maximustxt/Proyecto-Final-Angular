import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//*- INTERFACE :
import { IAlumnos } from 'src/common/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor(private http: HttpClient) {}

  getAlumnos() {
    return this.http.get(
      'https://servidor-proyecto-final-angular.onrender.com/Alumnos'
    );
  }

  getDetailAlumno(id: string) {
    return this.http.get(
      `https://servidor-proyecto-final-angular.onrender.com/Alumnos/${id}`
    );
  }

  putAlumnos(ID: string, alumno: IAlumnos) {
    return this.http.put(
      `https://servidor-proyecto-final-angular.onrender.com/Alumnos/${ID}`,
      alumno
    );
  }

  deleteAlumnos(ID: string) {
    return this.http.delete(
      `https://servidor-proyecto-final-angular.onrender.com/Alumnos/${ID}`
    );
  }

  postAlumnos(alumno: IAlumnos) {
    return this.http.post(
      'https://servidor-proyecto-final-angular.onrender.com/Alumnos',
      alumno
    );
  }

  getCursosAlumnos() {
    return this.http.get(
      'https://servidor-proyecto-final-angular.onrender.com/Cursos/Nombres'
    );
  }
}
