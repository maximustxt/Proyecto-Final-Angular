import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

//*- SERVICES :
import { CursosService } from "src/Services/Cursos/cursos.service";

//*- INTERFACE :
import { ICursos } from "src/common/Interfaces";

//*- COMPONENTE DIALOGO :
import { DialogoCursosComponent } from "../dialogo-cursos/dialogo-cursos.component";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.scss"],
})
export class CursosComponent {
  constructor(public dialog: MatDialog, private ServiceCurso: CursosService) {}

  Cursos!: ICursos[];

  displayedColumns: string[] = [
    "Nombre",
    "Descripcion",
    "Profesor",
    "Area",
    "Vacantes",
    "Acciones",
  ];

  dataSource = new MatTableDataSource(this.Cursos);

  ngOnInit(): void {
    this.ServiceCurso.getCursos().subscribe((Cursos: any) => {
      this.Cursos = Cursos;
      this.dataSource = new MatTableDataSource(this.Cursos);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //*- ELIMINAR CURSO:

  eliminarCurso(id: string) {
    this.ServiceCurso.deleteCursos(id).subscribe((Cursos: any) => {
      this.Cursos = Cursos;
      this.dataSource = new MatTableDataSource(this.Cursos);
    });
  }

  //*- EDITAR CURSO:

  EditCurso(Curso: ICursos) {
    this.dialog
      .open(DialogoCursosComponent, { data: Curso, width: "500px" })
      .afterClosed()
      .subscribe({
        next: (Curso) => {
          if (Curso) {
            this.ServiceCurso.putCursos(Curso._id, Curso).subscribe(
              (Cursos: any) => {
                this.Cursos = Cursos;
                this.dataSource = new MatTableDataSource(this.Cursos);
              }
            );
          }
        },
      });
  }

  //*- CREAR CURSO:

  openDialog(): void {
    this.dialog
      .open(DialogoCursosComponent, { width: "500px" })
      .afterClosed()
      .subscribe({
        next: (Curso) => {
          console.log(Curso);
          this.ServiceCurso.postCursos(Curso).subscribe((Cursos: any) => {
            this.Cursos = Cursos;
            console.log(Cursos);
            this.dataSource = new MatTableDataSource(this.Cursos);
          });
        },
      });
  }
}
