import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private artists: Artist[] = [
    {
      id: 1,
      name: 'Dona Dalva',
      category: 'Samba de Roda',
      bio: 'Mestra do samba de roda do Recôncavo, preservando tradições ancestrais.',
      imageUrl: 'https://www.ba.gov.br/cultura/sites/site-secult/files/migracao_2024/arquivos/Image/DonaDalva_Divulgacao.jpg', // Coloque uma foto na pasta public/img
      instagram: '@donadalva'
    },
    {
      id: 2,
      name: 'Bel Borba',
      category: 'Artes Visuais',
      bio: 'Artista plástico conhecido por suas intervenções urbanas e mosaicos.',
      imageUrl: 'https://alo-storage.nyc3.digitaloceanspaces.com/alo-laravel/public/images/p/nota_belborba_aloalobahia.jpg'
    },
    {
      id: 3,
      name: 'Wagner Moura',
      category: 'Cinema',
      bio: 'Ator baiano reconhecido mundialmente pelas suas atuações.',
      imageUrl: 'https://i.metroimg.com/_ZjkgLU75ti6tY0-wTJrvGN83dOR2lQtU-Uy24UDNPI/w:1200/q:85/f:webp/plain/2025/02/28114005/Wagner-Moura-4.jpg'
    },
  ];

  constructor() { }

  getArtists(): Artist[] {
    return this.artists;
  }
}