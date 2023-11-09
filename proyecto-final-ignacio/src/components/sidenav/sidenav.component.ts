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
//* AXIONS :
import { conunterAxions } from 'src/Redux/Actions/Actions';
//* LOCAL STORAGE :
import EliminarUser from '../LocalStorage/EliminarUser';
import ObtenerUser from '../LocalStorage/ObtenerUser';

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
    this.Admin = ObtenerUser();
  }

  metodOpenMenu() {
    this.sidenav.toggle();
  }

  MetodoCambioDeIdioma(valor: string) {
    this.TraslateService.use(valor);
    this.CambioDeIdioma = !this.CambioDeIdioma;
  }

  //* METODO LOGOUT :

  MetodoLogout() {
    this.sidenav.toggle();
    //* HACEMOS UN LOGOUT CON REDUX :
    this.store.dispatch(conunterAxions.logout());
    //* ELIMINO EL LOCAL STORAGE:
    EliminarUser();
    this.router.navigate(['']);
  }

  //* CUANDO EL COMPONENTE SE DESMONTA :

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.Suscription.unsubscribe();
  }

  //* FUNCION QUE REDIRIJE A LOS ALUMNOS :

  RedirijirAlumnos() {
    if (!ObtenerUser()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Alumnos']);
    }
  }

  //* FUNCION QUE REDIRIJE A LOS CURSOS :

  RedirijirCursos() {
    if (!ObtenerUser()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Cursos']);
    }
  }

  //* FUNCION QUE REDIRIJE A LAS INSCRIPCIONES :

  RedirijirInscripciones() {
    if (!ObtenerUser()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Inscripciones']);
    }
  }

  //* FUNCION QUE REDIRIJE A LAS ADMINISTRADORES :

  RedirijirAdministradores() {
    if (!ObtenerUser()) {
      this.AlertaAdminLogeado();
    } else {
      this.router.navigate(['Administradores']);
    }
  }
}
