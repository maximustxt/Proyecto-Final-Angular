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
//* INTERFACE DE ADMIN :
import { IAdmin } from 'src/common/Interfaces';

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

  //*------------------------------------------------- LoginAdmin(Administrador) :

  it('Debe enviar una solicitud POST para iniciar sesión como administrador en el metodo LoginAdmin(Administrador)', () => {
    const adminCredentials = {
      nombre: 'example',
      email: 'example@example.com',
      password: 'password123',
    };

    service.LoginAdmin(adminCredentials).subscribe((response: any) => {
      // Verificar la respuesta de la suscripcion al servicio.
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

  //*------------------------------------------------- getAdministradores() :

  it('Debe enviar una solicitud GET para obtener todos los  administradores , con el metodo getAdministradores()', () => {
    const responseMock = [
      {
        _id: '12sadq23d23dzsf43f43f',
        nombre: 'juan',
        apellido: 'Martinez',
        edad: 45,
        imagen: 'http://imagen.com',
        email: 'JuanMartinez@gmail.com',
      },
    ];

    service.getAdministradores().subscribe((response: IAdmin[]) => {
      // Verificar la respuesta de la suscripcion al servicio.
      expect(response).toEqual(responseMock);
    });

    const req = httpController.expectOne(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores`
    );
    expect(req.request.method).toEqual('GET');

    // Respuesta de nuestro Mock :
    req.flush(responseMock);
  });

  //*------------------------------------------------- getDetailAdministradores(id) :

  it('Debe enviar una solicitud GET para obtener el detalle de un administrador , con el metodo getDetailAdministradores(id)', () => {
    const idMock = '12sadq23d23dzsf43f43f';
    const responseMock = {
      _id: '12sadq23d23dzsf43f43f',
      nombre: 'juan',
      apellido: 'Martinez',
      edad: 45,
      imagen: 'http://imagen.com',
      email: 'JuanMartinez@gmail.com',
    };

    service.getDetailAdministradores(idMock).subscribe((response: any) => {
      // Verificar la respuesta de la suscripcion al servicio.
      expect(response).toEqual(responseMock);
    });

    const req = httpController.expectOne(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores/Detail/${idMock}`
    );
    expect(req.request.method).toEqual('GET');

    // Respuesta de nuestro Mock :
    req.flush(responseMock);
  });

  //*------------------------------------------------- DeleteAdministradores(id) :

  it('Debe enviar una solicitud DELETE para eliminar un administrador , con el metodo DeleteAdministradores(id)', () => {
    const idMock = '12sadq23d23dzsf43f43f';
    const responseMock = [
      {
        _id: '12sadq23d23dzsf43f43f',
        nombre: 'juan',
        apellido: 'Martinez',
        edad: 45,
        imagen: 'http://imagen.com',
        email: 'JuanMartinez@gmail.com',
      },
    ];

    service.DeleteAdministradores(idMock).subscribe((response: any) => {
      // Verificar la respuesta de la suscripcion al servicio.
      expect(response).toEqual(responseMock);
    });

    const req = httpController.expectOne(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores/${idMock}`
    );
    expect(req.request.method).toEqual('DELETE');

    // Respuesta de nuestro Mock :
    req.flush(responseMock);
  });

  //*------------------------------------------------- PostAdministrador(Administrador) :

  it('Debe enviar una solicitud POST para crear un administrador , con el metodo PostAdministrador(Administrador)', () => {
    const adminCredentials = {
      _id: '12sadq23d23dzsf43f43f',
      nombre: 'juan',
      apellido: 'Martinez',
      edad: 45,
      imagen: 'http://imagen.com',
      email: 'JuanMartinez@gmail.com',
    };
    const responseMock = [
      {
        _id: '12sadq23d23dzsf43f43f',
        nombre: 'juan',
        apellido: 'Martinez',
        edad: 45,
        imagen: 'http://imagen.com',
        email: 'JuanMartinez@gmail.com',
      },
    ];

    service.PostAdministrador(adminCredentials).subscribe((response: any) => {
      // Verificar la respuesta de la suscripcion al servicio.
      expect(response).toEqual(responseMock);
    });

    const req = httpController.expectOne(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores`
    );
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(adminCredentials);

    // Respuesta de nuestro Mock :
    req.flush(responseMock);
  });

  //*------------------------------------------------- PutAdministrador(Administrador , id) :

  it('Debe enviar una solicitud PUT para actualizar a un administrador , con el metodo PutAdministrador(Administrador , id)', () => {
    const idMock = '12sadq23d23dzsf43f43f';
    const adminCredentials = {
      _id: '12sadq23d23dzsf43f43f',
      nombre: 'juan',
      apellido: 'Martinez',
      edad: 45,
      imagen: 'http://imagen.com',
      email: 'JuanMartinez@gmail.com',
    };
    const responseMock = [
      {
        _id: '12sadq23d23dzsf43f43f',
        nombre: 'juan',
        apellido: 'Martinez',
        edad: 45,
        imagen: 'http://imagen.com',
        email: 'JuanMartinez@gmail.com',
      },
    ];

    service
      .PutAdministrador(adminCredentials, idMock)
      .subscribe((response: any) => {
        // Verificar la respuesta de la suscripcion al servicio.
        expect(response).toEqual(responseMock);
      });

    const req = httpController.expectOne(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores/${idMock}`
    );
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(adminCredentials);

    // Respuesta de nuestro Mock :
    req.flush(responseMock);
  });
});

// toEqual : Este metodo sirve para verufucar que lo que eseramos puede ser un objeto o un dato complejo.
// Ejemplo : expect(LogeoAdmin).toEqual({nombre: 'nombreEjemplo',email: 'emailEjemplo',password: 'passwordEjemplo',})
