import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; 
import { HeaderComponent } from './components/header/header.component'; 

// IMPORTANTE: Importe o seu Footer aqui
import { FooterComponent } from './components/footer/footer.component'; // <--- Verifique se o caminho está certo

@Component({
  selector: 'app-root',
  standalone: true,
  // Adicione o FooterComponent na lista de imports
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vozes-do-interior';
  mostrarMenu: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlAtual = event.urlAfterRedirects;
        
        // Verifica se é login ou cadastro
        if (urlAtual.includes('/login') || urlAtual.includes('/cadastro')) {
          this.mostrarMenu = false; // Esconde tudo
        } else {
          this.mostrarMenu = true; // Mostra tudo
        }
      }
    });
  }
}