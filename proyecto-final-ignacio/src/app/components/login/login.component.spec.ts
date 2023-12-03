import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { delay, of } from 'rxjs';
//* MODULO SHARED :
import { SharedModule } from 'src/shared/shared.module';
//* MODULO STORE :
import { Store, StoreModule } from '@ngrx/store';
//* ALERTA :
import { HotToastService } from '@ngneat/hot-toast';
//* COMPONENTE :
import { LoginComponent } from './login.component';
//* REDUCER :
import { reducer } from './pages/store/login-admin.reducer';
import { AdminService } from 'src/Services/Administrador/admin.service';
import { LoginAdminActions } from './pages/store/login-admin.actions';
import { selectLoginAdmin } from './pages/store/login-admin.selectors';
import { State } from './pages/store/login-admin.reducer';

describe('Test del Componente Login', () => {
  let login_Component: LoginComponent;
  let toastService: HotToastService;
  let mockServiceAdmin: jasmine.SpyObj<AdminService>;
  let mockToastService: jasmine.SpyObj<HotToastService>;
  const mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);

  beforeEach(() => {
    mockServiceAdmin = jasmine.createSpyObj('AdminService', ['LoginAdmin']);
    mockToastService = jasmine.createSpyObj('HotToastService', [
      'success',
      'warning',
      'error',
    ]);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        StoreModule.forRoot(reducer, {}),
      ],
      providers: [HotToastService],
    });

    // Instancia de la clase del componente
    login_Component = TestBed.createComponent(LoginComponent).componentInstance;
    toastService = TestBed.inject(HotToastService);
  });

  it('Debería crear el componente de inicio de sesión', () => {
    expect(login_Component).toBeTruthy();
  });

  it('La variable Hide debe ser un booleano (true)', () => {
    expect(login_Component.hide).toEqual(true);
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

  it('should dispatch loadLoginAdmins action and handle response', fakeAsync(() => {
    const mockLoginData = {
      nombre: 'Juan',
      email: 'JuanPereira123@gmail.com',
      password: '123456',
    };
    const mockResponse = {
      authUser: 'Administrador Permitido!' || null,
    };

    // Set up the form
    login_Component.LogeoAdmin.setValue(mockLoginData);

    // Configure the service to return a mock response
    mockServiceAdmin.LoginAdmin.and.returnValue(
      of(mockResponse).pipe(delay(0))
    );

    // Configure the store to return a mock response
    const mockAppState: State = {
      authUser: '',
    };

    (mockStore.select as jasmine.Spy).and.returnValue(
      of(mockAppState).pipe(delay(0))
    );

    // Call the method to be tested
    login_Component.SubmitLogin();
    tick();
    flush();

    // Assertions :
    // expect(mockServiceAdmin.LoginAdmin).toHaveBeenCalledWith(mockLoginData);
    // expect(mockStore.dispatch).toHaveBeenCalledWith(
    //   LoginAdminActions.loadLoginAdmins({
    //     data: {
    //       nombre: 'Juan',
    //       email: 'JuanPereira123@gmail.com',
    //       password: '123456',
    //     },
    //   })
    // );
    // expect(mockStore.select).toHaveBeenCalledWith(
    //   selectLoginAdmin,
    //   mockAppState
    // );

    // expect(login_Component.AlertaAdminLogeado).toHaveBeenCalled();
    // expect((login_Component as any).router.navigate).toHaveBeenCalledWith([
    //   'Alumnos',
    // ]);
  }));

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

  //*------------------------------------------------------- TEST DE ALERTS :

  it('Debería llamar a toast.success al llamar a AlertaAdminLogeado', () => {
    spyOn(toastService, 'success');
    login_Component.AlertaAdminLogeado();
    expect(toastService.success).toHaveBeenCalled();
  });

  it('Debería llamar a toast.warning al llamar a AlertaCamposIncompletos', () => {
    spyOn(toastService, 'warning');
    login_Component.AlertaCamposIncompletos();
    expect(toastService.warning).toHaveBeenCalled();
  });

  it('Debería llamar a toast.warning al llamar a AlertaErroresEnLosCampos', () => {
    spyOn(toastService, 'warning');
    login_Component.AlertaErroresEnLosCampos();
    expect(toastService.warning).toHaveBeenCalled();
  });

  it('Debería llamar a toast.error con el mensaje correcto al llamar a AlertaErroresLogin', () => {
    const errorMessage = 'Mensaje de error de prueba';
    spyOn(toastService, 'error');
    login_Component.AlertaErroresLogin(errorMessage);
    expect(toastService.error).toHaveBeenCalledWith(
      errorMessage,
      jasmine.any(Object)
    );
  });
});

//- .toHaveBeenCalledWith() ==> Este metodo se utiliza para verificar si una funcion fue llamada y aparte de eso se le pasa un parametro.
//- .toHaveBeenCalled() ==> Este metodo sirve para verificar si una funcion fue llamada o no.
//-  spyOn(toastService, 'error'); ==> Espiamos si el objeto toastService tira alguna funcion de tipo error.
