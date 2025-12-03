import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    email: '',
    password: '',
    remember: false
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      alert("Por favor, preencha e-mail e senha.");
      return;
    }
    const usersString = localStorage.getItem('vozes_users');
    const users = usersString ? JSON.parse(usersString) : [];

    const foundUser = users.find((u: any) => 
      u.email === this.loginData.email && u.password === this.loginData.password
    );

    if (foundUser) {
      const sessionUser = { name: foundUser.name, email: foundUser.email };
      localStorage.setItem('vozes_session', JSON.stringify(sessionUser));

      console.log("Login realizado:", sessionUser);
      this.router.navigate(['/home']);
    } else {
      alert("E-mail ou senha incorretos! Verifique seus dados.");
    }
  }
}