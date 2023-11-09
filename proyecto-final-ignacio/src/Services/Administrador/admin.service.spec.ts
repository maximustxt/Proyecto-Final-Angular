import { TestBed } from '@angular/core/testing';
//* SERVICIO :
import { AdminService } from './admin.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
//* URL DE PRODUCCION / LOCAL :
import { URL_PRODUCCION } from 'src/Enviroments/Enviroments.prod';

describe('AdminService', () => {
  let service: AdminService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AdminService], // Agrega tu servicio a los proveedores
    });

    //* INTANCIA DEL SERVICIO :
    service = TestBed.inject(AdminService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('AdminService esperamos que sea definido', () => {
    // Espera que no sea null o undefiend.
    expect(service).toBeTruthy();
  });

  it('Debe verificar que si un usuario es valido o no', () => {
    const USER_MOCK = {
      nombre: 'nombreEjemplo',
      email: 'emailEjemplo',
      password: 'passwordEjemplo',
    };

    //* HACEMOS UNA PETICION DE PRUEBA :

    httpController
      .expectOne({
        method: 'POST',
        url: `${URL_PRODUCCION.baseUrl}/TablaAdministradores/Verificacion`,
      })
      .flush([USER_MOCK]);

    service.LoginAdmin(USER_MOCK).subscribe({
      next: (LogeoAdmin) => {
        console.log(LogeoAdmin),
          expect(LogeoAdmin).toBeTruthy(),
          expect(LogeoAdmin).toBe('Administrador Permitido!');
      },
    });
  });
});

// toEqual : Este metodo sirve para verufucar que lo que eseramos puede ser un objeto o un dato complejo.
// Ejemplo : expect(LogeoAdmin).toEqual({nombre: 'nombreEjemplo',email: 'emailEjemplo',password: 'passwordEjemplo',})
