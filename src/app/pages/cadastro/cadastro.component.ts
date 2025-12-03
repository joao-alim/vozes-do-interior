import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  signupData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // 1. Validação de senhas iguais
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    // 2. Tenta recuperar usuários existentes (ou cria uma lista vazia se não houver ninguém)
    const usersString = localStorage.getItem('vozes_users');
    const users = usersString ? JSON.parse(usersString) : [];

    // 3. Verifica se o e-mail já existe
    const userExists = users.find((u: any) => u.email === this.signupData.email);

    if (userExists) {
      alert("Este e-mail já está cadastrado!");
      return;
    }

    // 4. Adiciona o novo usuário na lista
    // Não vamos salvar o confirmPassword, pois é inútil no banco
    const newUser = {
      name: this.signupData.name,
      email: this.signupData.email,
      password: this.signupData.password
    };

    users.push(newUser);

    // 5. Salva a lista atualizada no LocalStorage
    localStorage.setItem('vozes_users', JSON.stringify(users));

    alert("Cadastro realizado com sucesso! Bem-vindo(a) ao Vozes do Interior.");
    
    // 6. Redireciona para o Login
    this.router.navigate(['/login']);
  }
}