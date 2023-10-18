import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//*- INTERFACE :
import { IAlumnos } from "src/common/Interfaces";

@Injectable({
  providedIn: "root",
})
export class AlumnosService {
  constructor(private http: HttpClient) {}

  getAlumnos() {
    return this.http.get("http://localhost:3500/Alumnos");
  }

  putAlumnos(ID: string, alumno: IAlumnos) {
    return this.http.put(`http://localhost:3500/Alumnos/${ID}`, alumno);
  }

  deleteAlumnos(ID: string) {
    return this.http.delete(`http://localhost:3500/Alumnos/${ID}`);
  }

  postAlumnos(alumno: IAlumnos) {
    return this.http.post("http://localhost:3500/Alumnos", alumno);
  }
}
