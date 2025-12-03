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
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const usersString = localStorage.getItem('vozes_users');
    const users = usersString ? JSON.parse(usersString) : [];

    const userExists = users.find((u: any) => u.email === this.signupData.email);

    if (userExists) {
      alert("Este e-mail já está cadastrado!");
      return;
    }

    const newUser = {
      name: this.signupData.name,
      email: this.signupData.email,
      password: this.signupData.password
    };

    users.push(newUser);

    localStorage.setItem('vozes_users', JSON.stringify(users));

    alert("Cadastro realizado com sucesso! Bem-vindo(a) ao Vozes do Interior.");

    this.router.navigate(['/login']);
  }
}