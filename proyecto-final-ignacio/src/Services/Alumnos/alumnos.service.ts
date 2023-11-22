import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_PRODUCCION } from 'src/Enviroments/Enviroments.prod';
//*- INTERFACE :
import { IAlumnos } from 'src/common/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor(private http: HttpClient) {}

  LoginAlumno(nombre: string) {
    return this.http.get<IAlumnos>(
      `${URL_PRODUCCION.baseUrl}/Alumnos/Login/${nombre}`
    );
  }

  getAlumnos() {
    return this.http.get<IAlumnos[]>(`${URL_PRODUCCION.baseUrl}/Alumnos`);
  }

  getDetailAlumno(id: string) {
    return this.http.get<IAlumnos>(`${URL_PRODUCCION.baseUrl}/Alumnos/${id}`);
  }

  putAlumnos(ID: string, alumno: IAlumnos) {
    return this.http.put<IAlumnos[]>(
      `${URL_PRODUCCION.baseUrl}/Alumnos/${ID}`,
      alumno
    );
  }

  deleteAlumnos(ID: string) {
    return this.http.delete<IAlumnos[]>(
      `${URL_PRODUCCION.baseUrl}/Alumnos/${ID}`
    );
  }

  postAlumnos(alumno: IAlumnos) {
    return this.http.post<IAlumnos[]>(
      `${URL_PRODUCCION.baseUrl}/Alumnos`,
      alumno
    );
  }

  getCursosAlumnos() {
    return this.http.get<string[]>(`${URL_PRODUCCION.baseUrl}/Cursos/Nombres`);
  }
}
