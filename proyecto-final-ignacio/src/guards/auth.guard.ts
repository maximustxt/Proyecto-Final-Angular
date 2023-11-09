import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
//* LOCAL STORAGE :
import ObtenerUser from 'src/components/LocalStorage/ObtenerUser';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Aquí verifica si el usuario está logeado. Puedes usar tu lógica de autenticación aquí.
  const isUserLoggedIn = ObtenerUser();

  if (!isUserLoggedIn) {
    return true; // El usuario puede acceder a la ruta raíz si no está logeado.
  } else {
    router.navigate(['/Alumnos']); // Redirige al usuario a otra ruta si está logeado.
    return false; // Evita el acceso a la ruta raíz si el usuario está logeado.
  }
};
