import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para funcionar o ngModel
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  // AQUI ESTAVA FALTANDO:
  // Criamos o objeto que guarda os dados do formulário
  signupData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // 1. Validação simples: Senhas iguais?
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    // 2. Simula o cadastro
    console.log("Cadastrando usuário:", this.signupData);
    alert("Cadastro realizado com sucesso! Bem-vindo(a) ao Vozes do Interior.");

    // 3. Redireciona para o Login
    this.router.navigate(['/login']);
  }
}