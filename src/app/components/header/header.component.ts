import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' // Corrigi 'styleUrl' para 'styleUrls' (array) é o padrão, mas no Angular novo 'styleUrl' (string) funciona também. Mantenha como está no seu projeto.
})
export class HeaderComponent {
  
  isMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // --- AQUI ESTÁ A CORREÇÃO ---
  logout() {
    // 1. Removemos a "chave" de acesso do navegador
    localStorage.removeItem('vozes_session');
    
    console.log("Sessão encerrada. Usuário deslogado.");
    
    // 2. Fecha o menu se estiver aberto no celular
    this.isMenuOpen = false;

    // 3. Redireciona para a tela de Login
    this.router.navigate(['/login']);
  }
}