import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/Services/Administrador/admin.service';

//* Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

//* LOCALSTORAGE ADMINISTRADOR :
import ObtenerLocalStorageAdmin from '../LocalStorage/Administrador/ObtenerLocalStorageAdmin';
import EliminarLocalStorageAdmin from '../LocalStorage/Administrador/EliminarLocalStorageAdmin';

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
    private ServiciosAdministrador: AdminService,
    public auth: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  //* CUANDO EL COMPONENTE SE MONTA :

  ngOnInit(): void {
    if (ObtenerLocalStorageAdmin()) {
      this.Admin = ObtenerLocalStorageAdmin();
    }
  }

  MetodoCambioDeIdioma(valor: string) {
    this.TraslateService.use(valor);
    this.CambioDeIdioma = !this.CambioDeIdioma;
  }

  //* METODO LOGOUT :

  MetodoLogout() {
    this.Admin = undefined;
    EliminarLocalStorageAdmin();
    this.Suscription = this.ServiciosAdministrador.LogoutAdmin(
      ObtenerLocalStorageAdmin().id
    ).subscribe((value) => value);
    document.location.href = '';
  }

  //* CUANDO EL COMPONENTE SE DESMONTA :

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.Suscription.unsubscribe();
  }
}
