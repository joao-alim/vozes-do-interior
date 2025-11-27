import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContatoComponent } from './pages/contato/contato.component';

import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contato', component: ContatoComponent },

  { path: '**', redirectTo: '' } 
];