import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Essencial para o ngModel funcionar
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // AQUI ESTAVA O PROBLEMA:
  // Precisamos declarar o objeto 'loginData' para o HTML poder usar.
  loginData = {
    email: '',
    password: '',
    remember: false // O checkbox 'Lembrar-me' usa isso aqui
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log("Tentando logar com:", this.loginData);

    // Validação simples para simular o login
    if (this.loginData.email && this.loginData.password) {
      // Se tiver e-mail e senha, deixa entrar
      this.router.navigate(['/home']);
    } else {
      alert("Por favor, preencha e-mail e senha.");
    }
  }
}