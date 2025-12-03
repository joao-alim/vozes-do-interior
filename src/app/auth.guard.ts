import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const usuarioLogado = localStorage.getItem('vozes_session');

  if (usuarioLogado) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};