import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para o *ngIf funcionar
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; // Adicione NavigationEnd e Router
import { HeaderComponent } from './components/header/header.component'; // Ajuste o caminho se precisar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent], // Adicione CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vozes-do-interior';
  
  // Variável que controla se o menu aparece ou não
  mostrarMenu: boolean = true;

  constructor(private router: Router) {
    // Esse código roda toda vez que você muda de página
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica a URL atual
        const urlAtual = event.urlAfterRedirects; // Pega a url final (ex: '/login')
        
        // Se for login ou cadastro, ESCONDE o menu (false)
        if (urlAtual.includes('/login') || urlAtual.includes('/cadastro')) {
          this.mostrarMenu = false;
        } else {
          // Em qualquer outra página, MOSTRA o menu (true)
          this.mostrarMenu = true;
        }
      }
    });
  }
}