import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  // Nossa base de dados fictícia
  private artists: Artist[] = [
    {
      id: 1,
      name: 'Dona Dalva',
      category: 'Samba de Roda',
      bio: 'Mestra do samba de roda do Recôncavo, preservando tradições ancestrais.',
      imageUrl: 'img/dalva.jpg', // Coloque uma foto na pasta public/img
      instagram: '@donadalva'
    },
    {
      id: 2,
      name: 'Bel Borba',
      category: 'Artes Visuais',
      bio: 'Artista plástico conhecido por suas intervenções urbanas e mosaicos.',
      imageUrl: 'img/belborba.jpg'
    },
    {
      id: 3,
      name: 'Glauber Rocha',
      category: 'Cinema',
      bio: 'Cineasta conquistense, pai do Cinema Novo e visionário do sertão.',
      imageUrl: 'img/glauber.jpg'
    },
    // Adicione mais artistas se quiser
  ];

  constructor() { }

  getArtists(): Artist[] {
    return this.artists;
  }
}