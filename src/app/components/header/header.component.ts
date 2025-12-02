import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router'; // Adicione 'Router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  // Variável para controlar o menu no celular
  isMenuOpen = false;

  // Injetamos o Router para poder navegar via código
  constructor(private router: Router) {}

  // Função para abrir/fechar menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Função para fechar o menu ao clicar em um link
  closeMenu() {
    this.isMenuOpen = false;
  }

  // A FUNÇÃO QUE ESTAVA FALTANDO
  logout() {
    // 1. Aqui você limparia os dados do usuário (se tivesse backend)
    console.log("Saindo do sistema...");
    
    // 2. Fecha o menu se estiver aberto no celular
    this.isMenuOpen = false;

    // 3. Redireciona para a tela de Login
    this.router.navigate(['/login']);
  }
}