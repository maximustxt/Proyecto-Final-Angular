import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/shared/shared.module';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/Redux/Store';

//* COMPONENTE :
import { LoginComponent } from './login.component';

describe('Test del Componente Login', () => {
  let login_Component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        StoreModule.forRoot(appReducer, {}),
      ],
    });

    // Instancia de la clase del componente
    login_Component = TestBed.createComponent(LoginComponent).componentInstance;
  });

  it('Debería crear el componente de inicio de sesión', () => {
    expect(login_Component).toBeTruthy();
  });

  //*----------------------------------------------- TEST DE LOGIN CON ERRORES :

  it('SI el formulario es invalido debe tirar un alert de error', () => {
    login_Component.LogeoAdmin.patchValue({
      nombre: '234234234',
      email: 'dsdfsdfsd',
      password: '234234',
    });

    spyOn(login_Component, 'AlertaErroresEnLosCampos');

    login_Component.SubmitLogin();

    expect(login_Component.AlertaErroresEnLosCampos).toHaveBeenCalled();
  });

  //*--------------------------------------------------- TEST DE LOGIN EXITOSO :

  it('Debe llamar a AlertaAdminLogeado y llevarme a la ruta Alumnos en caso de éxito', () => {
    login_Component.LogeoAdmin.patchValue({
      nombre: 'Juan',
      email: 'JuanPereira123@gmail.com',
      password: '123456',
    });

    // Configura una solicitud HTTP simulada exitosa
    const response = 'Administrador Permitido!';

    spyOn((login_Component as any).servicioAdmin, 'LoginAdmin').and.returnValue(
      of(response)
    );

    spyOn(login_Component, 'AlertaAdminLogeado');
    spyOn((login_Component as any).router, 'navigate');

    // Llama a la función para activar el caso
    login_Component.SubmitLogin();

    // Verifica que los métodos se hayan llamado
    expect(login_Component.AlertaAdminLogeado).toHaveBeenCalled();
    expect((login_Component as any).router.navigate).toHaveBeenCalledWith([
      'Alumnos',
    ]);
  });

  //*----------------------------------------------------- TEST DEL LOGIN SI ESTA VACIO :

  it('Deberia de tirar un alert si el formulario esta vacio', () => {
    // Configura el formulario con datos incompletos
    login_Component.LogeoAdmin.patchValue({
      nombre: '',
      email: '', // Deja el campo de correo electrónico vacío
      password: '123456',
    });

    spyOn(login_Component, 'AlertaCamposIncompletos');
    login_Component.SubmitLogin();
    expect(login_Component.AlertaCamposIncompletos).toHaveBeenCalled();
  });
});
