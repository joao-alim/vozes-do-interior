import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' } 
];