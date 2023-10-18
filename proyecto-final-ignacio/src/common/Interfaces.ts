export interface IAlumnos {
  _id?: string;
  nombre: string;
  apellido: string;
  edad: number;
  imagen: string;
  cursando: string;
}

export interface ICursos {
  _id?: string;
  nombre: string;
  descripcion: string;
  profesor: string;
  area: string;
  vacantes: number;
}
