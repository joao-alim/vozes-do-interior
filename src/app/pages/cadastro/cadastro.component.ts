import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <--- 1. IMPORTE ISSO

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- 2. ADICIONE AQUI NA LISTA
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}