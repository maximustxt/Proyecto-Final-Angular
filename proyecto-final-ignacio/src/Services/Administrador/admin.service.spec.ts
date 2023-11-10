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

describe('Test del Servicio de Administradores', () => {
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

  it('Debe enviar una solicitud POST para iniciar sesión como administrador', () => {
    const adminCredentials = {
      nombre: 'example',
      email: 'example@example.com',
      password: 'password123',
    };

    service.LoginAdmin(adminCredentials).subscribe((response: any) => {
      // Verificar propiedades específicas en la respuesta
      expect(response).toEqual('Administrador Permitido!');
    });

    const req = httpController.expectOne(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores/Verificacion`
    );
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(adminCredentials);

    // Respuesta de nuestro Mock :
    const mockResponse = 'Administrador Permitido!';
    req.flush(mockResponse);
  });
});

// toEqual : Este metodo sirve para verufucar que lo que eseramos puede ser un objeto o un dato complejo.
// Ejemplo : expect(LogeoAdmin).toEqual({nombre: 'nombreEjemplo',email: 'emailEjemplo',password: 'passwordEjemplo',})
