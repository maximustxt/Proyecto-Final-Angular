import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
//* LOCALSTORAGE :
import ObtenerUser from 'src/components/LocalStorage/ObtenerUser';

export const rutasGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (ObtenerUser() === 'Administrador Permitido!') {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
