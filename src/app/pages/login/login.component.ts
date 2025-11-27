import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router'; // Adicionei 'Router' aqui

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Aqui injetamos a ferramenta de navegação do Angular
  constructor(private router: Router) {}

  login() {
    // Aqui seria onde você conectaria com um Back-end real.
    // Como é um desafio Front-end, vamos simular o sucesso.
    
    console.log("Tentando entrar no Vozes do Interior...");
    
    // Redireciona para a página principal
    this.router.navigate(['/home']);
  }
}