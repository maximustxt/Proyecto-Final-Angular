import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/shared/shared.module';
// import { Router } from '@angular/router';

describe('Test del Componente Login', () => {
  let login_Component: LoginComponent;
  // let router: Router;

  beforeEach(() => {
    // Esto nos permite declarar a qué componente le vamos a hacer el test:
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, SharedModule],
    });

    // Configura un router falso para pruebas
    // TestBed.overrideProvider(Router, {
    //   useValue: jasmine.createSpyObj('Router', ['navigate']),
    // });
    //* Instancia de la clase del componente componente :
    login_Component = TestBed.createComponent(LoginComponent).componentInstance;

    //* Inyectar el router :
    // router = TestBed.inject(Router);
  });

  // Lo que esperamos que se cumpla para el test:
  it('Debería crear el componente de inicio de sesión', () => {
    expect(login_Component).toBeTruthy();
  });

  //* TEST DE FORMULARIO INVALIDO :

  it('SI el formulario es invalido debe tirar un alert de error', () => {
    login_Component.LogeoAdmin.patchValue({
      nombre: '',
      email: 'dsdfsdfsd',
      password: '',
    });
    // Usamos el spyon para verificar si un metodo o funcion fue llamado correctamente dentro de otro metodo :
    // Spyon no sirve para "Espiar" la funcion padre o metodo y verificar que este utilizando ese metodo que deseamos verificar.
    spyOn(login_Component, 'AlertaErroresEnLosCampos');

    login_Component.SubmitLogin();

    expect(login_Component.AlertaErroresEnLosCampos).toHaveBeenCalled();
  });

  //* TEST DE FORMULARIO VALIDO :

  it('Debe llamar el metodo LoginAdmin si el formulario es valido', () => {
    login_Component.LogeoAdmin.patchValue({
      nombre: 'Juan',
      email: 'JuanPereira123@gmail.com',
      password: '123456',
    });

    // Verificamos si el servicio esta funcionando :
    const EspiaDelServicioOnSubmit = spyOn(
      (login_Component as any).servicioAdmin,
      'SubmitLogin'
    );

    login_Component.SubmitLogin();

    expect(EspiaDelServicioOnSubmit).toHaveBeenCalled();
  });

  //* TEST DE FORM VACIO :
  it('Deberia de tirar un alert si el formulario esta vacio', () => {
    spyOn(login_Component, 'AlertaCamposIncompletos');

    login_Component.SubmitLogin();

    expect(login_Component.AlertaCamposIncompletos).toHaveBeenCalled();
  });

  // //* REDIRIJIR A LA RUTA ALUMNOS SI SALE BIEN EL LOGIN :
  // it('Debería navegar a la ruta "Alumnos" después del inicio de sesión exitoso', async () => {
  //   // Simula una llamada exitosa a tu función de inicio de sesión que devuelve una promesa
  //   spyOn(login_Component, 'SubmitLogin').and.returnValue(Promise.resolve());

  //   // Llamar a la función que debería navegar a 'Alumnos'
  //   await login_Component.SubmitLogin();

  //   // Verificar que la función navigate se llamó con la ruta correcta
  //   expect(router.navigate).toHaveBeenCalledWith(['Alumnos']);
  // });
});
