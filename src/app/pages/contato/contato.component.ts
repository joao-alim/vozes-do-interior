import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Obrigatório para o formulário funcionar

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  // Objeto que guarda os dados digitados
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log("Formulário enviado:", this.contactData);
    alert("Mensagem enviada com sucesso! Logo entraremos em contato.");
    
    // Limpa o formulário depois de enviar
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}