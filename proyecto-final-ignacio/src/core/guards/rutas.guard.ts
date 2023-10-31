import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
//* LOCALSTORAGE :
import ObtenerLocalStorageAdmin from 'src/components/LocalStorage/ObtenerLocalStorageAdmin';

export const rutasGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (ObtenerLocalStorageAdmin()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
