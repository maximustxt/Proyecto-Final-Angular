import { Component, OnInit, ViewChild } from "@angular/core";

//- Interfaces :
import { IAlumnos } from "../../common/Interfaces";

//*- SERVICIOS DE ALUMNO :
import { AlumnosService } from "src/Services/Alumnos/alumnos.service";

// Tabla :
import { MatTableDataSource } from "@angular/material/table";

//- Paginacion :
import { MatPaginator } from "@angular/material/paginator";

//- LocalStorage :
import { MatDialog } from "@angular/material/dialog";

//- Componente Dialogo :
import { DialogoComponent } from "../../components/dialogo/dialogo.component";

@Component({
  selector: "app-alumnos",
  templateUrl: "./alumnos.component.html",
  styleUrls: ["./alumnos.component.scss"],
})
export class AlumnosComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private ServiceAlumno: AlumnosService
  ) {}

  Alumnos!: IAlumnos[];

  displayedColumns: string[] = [
    "Nombre",
    "Edad",
    "Imagen",
    "Cursando",
    "Acciones",
  ];

  dataSource = new MatTableDataSource(this.Alumnos);

  ngOnInit(): void {
    this.ServiceAlumno.getAlumnos().subscribe((Alumnos: any) => {
      this.Alumnos = Alumnos;
      this.dataSource = new MatTableDataSource(this.Alumnos);
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

  //*- ELIMINAR ALUMNO :

  eliminarAlumno(id: string) {
    this.ServiceAlumno.deleteAlumnos(id).subscribe((Alumnos: any) => {
      this.Alumnos = Alumnos;
      this.dataSource = new MatTableDataSource(this.Alumnos);
    });
  }

  //*- EDITAR ALUMNO :

  EditAlumno(Alumno: IAlumnos) {
    this.dialog
      .open(DialogoComponent, { data: Alumno, width: "500px" })
      .afterClosed()
      .subscribe({
        next: (Alumno) => {
          if (Alumno) {
            this.ServiceAlumno.putAlumnos(Alumno._id, Alumno).subscribe(
              (Alumnos: any) => {
                this.Alumnos = Alumnos;
                this.dataSource = new MatTableDataSource(this.Alumnos);
              }
            );
          }
        },
      });
  }

  //*- CREAR ALUMNO :

  openDialog(): void {
    this.dialog
      .open(DialogoComponent, { width: "500px" })
      .afterClosed()
      .subscribe({
        next: (Alumno) => {
          this.ServiceAlumno.postAlumnos(Alumno).subscribe((Alumnos: any) => {
            this.Alumnos = Alumnos;
            this.dataSource = new MatTableDataSource(this.Alumnos);
          });
        },
      });
  }
}
