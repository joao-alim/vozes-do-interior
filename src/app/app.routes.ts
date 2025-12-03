import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { authGuard } from './auth.guard'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'perfil', component: PerfilComponent },
  
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [authGuard]
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
  { path: 'header', component: HeaderComponent }, 

  { path: '**', redirectTo: '' } 
];