import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

// IMPORTANTE: Importe o guard que criamos
import { authGuard } from './auth.guard'; 

export const routes: Routes = [
  // Rotas Públicas (Todo mundo pode acessar)
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  
  // Rotas Protegidas (Só com login) -> Adicionei o canActivate aqui
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [authGuard]  // <--- O SEGURANÇA ESTÁ AQUI
  },
  { 
    path: 'sobre', 
    component: SobreComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'artistas', 
    component: ArtistasComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'galeria', 
    component: GaleriaComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'contato', 
    component: ContatoComponent, 
    canActivate: [authGuard] 
  },

  // Header geralmente é um componente fixo, mas se for uma rota de teste:
  { path: 'header', component: HeaderComponent }, 

  { path: '**', redirectTo: '' } 
];