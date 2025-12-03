import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // 1. Verifica se existe o dado da sessão no LocalStorage
  const usuarioLogado = localStorage.getItem('vozes_session');

  if (usuarioLogado) {
    // Se tem sessão, deixa passar
    return true;
  } else {
    // Se não tem, redireciona para o login e bloqueia
    router.navigate(['/login']);
    return false;
  }
};