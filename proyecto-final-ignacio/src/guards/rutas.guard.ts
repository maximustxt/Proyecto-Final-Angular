import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
//* LOCALSTORAGE :
import ObtenerUser from 'src/app/components/LocalStorage/Admin/ObtenerAdministrador';
import ObtenerAlumno from 'src/app/components/LocalStorage/Alumnos/ObtenerAlumno';

export const rutasGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (ObtenerUser() === 'Administrador Permitido!' || ObtenerAlumno()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
