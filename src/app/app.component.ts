import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; 
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
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
        
        if (urlAtual.includes('/login') || urlAtual.includes('/cadastro')) {
          this.mostrarMenu = false;
        } else {
          this.mostrarMenu = true;
        }
      }
    });
  }
}