import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICursos } from "src/common/Interfaces";

@Injectable({
  providedIn: "root",
})
export class CursosService {
  constructor(private http: HttpClient) {}

  getCursos() {
    return this.http.get(`http://localhost:3500/Cursos`);
  }

  deleteCursos(ID: string) {
    return this.http.delete(`http://localhost:3500/Cursos/${ID}`);
  }

  postCursos(Curso: ICursos) {
    return this.http.post(`http://localhost:3500/Cursos`, Curso);
  }

  putCursos(ID: string, Curso: ICursos) {
    return this.http.put(`http://localhost:3500/Cursos/${ID}`, Curso);
  }
}
