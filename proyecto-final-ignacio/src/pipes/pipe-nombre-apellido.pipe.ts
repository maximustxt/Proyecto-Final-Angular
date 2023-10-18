import { Pipe, PipeTransform } from "@angular/core";

//*- INTERFACE ALUMNO :
import { IAlumnos } from "src/common/Interfaces";

@Pipe({
  name: "pipeNombreApellido",
})
export class PipeNombreApellidoPipe implements PipeTransform {
  transform(value: IAlumnos, ...args: unknown[]): string {
    if (value) {
      return `${value.nombre}  ${value.apellido}`;
    } else {
      return "";
    }
  }
}
