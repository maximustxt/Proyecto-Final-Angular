//* INTERFACE :
import { IAlumnos } from 'src/common/Interfaces';

const AgregarAlumno = (alumno: IAlumnos) => {
  localStorage.setItem('Alumno', JSON.stringify(alumno));
};

export default AgregarAlumno;
