import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import ObtenerAlumno from 'src/app/components/LocalStorage/Alumnos/ObtenerAlumno';

export const authAlumnoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Aquí verifica si el usuario está logeado. Puedes usar tu lógica de autenticación aquí.
  const isAlumnoLoggedIn = ObtenerAlumno();

  if (!isAlumnoLoggedIn) {
    return true; // El usuario puede acceder a la ruta raíz si no está logeado.
  } else {
    router.navigate(['/PerfilAlumno']); // Redirige al usuario a otra ruta si está logeado.
    return false; // Evita el acceso a la ruta raíz si el usuario está logeado.
  }
};
