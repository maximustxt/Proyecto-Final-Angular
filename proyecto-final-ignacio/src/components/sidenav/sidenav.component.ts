import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

//* ALERTAS :
import { HotToastService } from '@ngneat/hot-toast';
//* STORE :
import { Store } from '@ngrx/store';

//* LOCAL STORAGE :
import EliminarAdministrador from '../LocalStorage/Admin/EliminarAdministrador';
import ObtenerAdministrador from '../LocalStorage/Admin/ObtenerAdministrador';
import ObtenerAlumno from '../LocalStorage/Alumnos/ObtenerAlumno';
import { IAlumnos } from 'src/common/Interfaces';
import EliminarAlumno from '../LocalStorage/Alumnos/EliminarAlumno';
//* ACTIONS :
import { LoginAdminActions } from '../login/pages/store/login-admin.actions';
import { LoginAlumnosActions } from '../login-estudiante/pages/store/login-alumnos.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy, OnInit {
  CambioDeIdioma!: boolean;
  toppings = new FormControl('');
  Admin!: any;
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  shouldRun = true;

  AlumnosLogeado: IAlumnos;

  Suscription: Subscription = new Subscription();

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private TraslateService: TranslateService,
    private router: Router,
    private toast: HotToastService,
    private store: Store
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.AlumnosLogeado = ObtenerAlumno();
  }

  @ViewChild('snav') sidenav!: MatSidenav;

  //*- ALERTAS :

  AlertaAdminLogeado() {
    this.toast.warning('Debes Iniciar Sesion!', {
      position: 'top-right',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    });
  }

  //* CUANDO EL COMPONENTE SE MONTA :

  ngOnInit(): void {
    this.Admin = ObtenerAdministrador();
  }

  metodOpenMenu() {
    if (ObtenerAdministrador() || ObtenerAlumno()) {
      this.sidenav.toggle();
    } else {
      this.AlertaAdminLogeado();
    }
  }

  MetodoCambioDeIdioma(valor: string) {
    this.TraslateService.use(valor);
    this.CambioDeIdioma = !this.CambioDeIdioma;
  }

  //* METODOS LOGOUT :

  MetodoLogoutAdmin() {
    this.sidenav.toggle();
    //* HACEMOS UN LOGOUT CON REDUX :
    this.store.dispatch(LoginAdminActions.logout());
    //* ELIMINO EL LOCAL STORAGE:
    EliminarAdministrador();

    setTimeout(() => {
      document.location.reload();
    }, 100);

    this.router.navigate(['']);
  }

  MetodoLogoutAlumnos() {
    this.sidenav.toggle();
    //* HACEMOS UN LOGOUT CON REDUX :
    this.store.dispatch(LoginAlumnosActions.logout());
    //* ELIMINO EL LOCAL STORAGE:
    EliminarAlumno();

    setTimeout(() => {
      document.location.reload();
    }, 100);

    this.router.navigate(['']);
  }

  //* CUANDO EL COMPONENTE SE DESMONTA :

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.Suscription.unsubscribe();
  }

  //* FUNCION QUE REDIRIJE A LOS ALUMNOS :

  RedirijirAlumnos() {
    if (!ObtenerAdministrador()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Alumnos']);
    }
  }

  //* FUNCION QUE REDIRIJE A LOS CURSOS :

  RedirijirCursos() {
    if (!ObtenerAdministrador()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Cursos']);
    }
  }

  //* FUNCION QUE REDIRIJE A LAS INSCRIPCIONES :

  RedirijirInscripciones() {
    if (!ObtenerAdministrador()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Inscripciones']);
    }
  }

  //* FUNCION QUE REDIRIJE A LAS ADMINISTRADORES :

  RedirijirAdministradores() {
    if (!ObtenerAdministrador()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Administradores']);
    }
  }

  //* FUNCION QUE REDIRIJE A LA HOME :

  RedirijirHome() {
    if (!ObtenerAlumno()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Home']);
    }
  }

  RedirijirPerfil() {
    if (!ObtenerAlumno()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['PerfilAlumno']);
    }
  }

  RedirijirMisCursos() {
    if (!ObtenerAlumno()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['MisCursos']);
    }
  }

  MetodoEstadisticas() {
    if (!ObtenerAdministrador()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Estadisticas']);
    }
  }
}
