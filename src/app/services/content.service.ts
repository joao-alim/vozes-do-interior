import { Injectable } from '@angular/core';

// --- INTERFACES (Definem o formato dos dados) ---
export interface Artist {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  location: string;
}

export interface Artwork {
  id: number;
  title: string;
  artist: string;
  artistId: number;
  type: string; // 'pintura', 'musica', 'video', 'fotografia', 'escultura'
  image: string;
  description: string;
}

// --- O SERVIÇO (O cérebro que guarda os dados) ---
@Injectable({
  providedIn: 'root' // ISSO É OBRIGATÓRIO para funcionar a injeção
})
export class ContentService {
  
  // Lista de Artistas
  private artists: Artist[] = [
    {
      id: 1,
      name: "Maria das Dores Silva",
      specialty: "Pintora",
      bio: "Retrata paisagens do sertão baiano com cores vibrantes.",
      image: "/public/artista-baiana-pintora.png", 
      location: "Feira de Santana, BA",
    },
    {
      id: 2,
      name: "João Pedro Santos",
      specialty: "Músico",
      bio: "Compositor e violeiro, preserva tradições musicais do interior.",
      image: "assets/img/musico-violeiro.jpg",
      location: "Jacobina, BA",
    },
    {
      id: 3,
      name: "Ana Clara Oliveira",
      specialty: "Cineasta",
      bio: "Diretora de documentários sobre a vida no sertão.",
      image: "assets/img/cineasta.jpg",
      location: "Vitória da Conquista, BA",
    },
    {
      id: 4,
      name: "Carlos Eduardo Lima",
      specialty: "Fotógrafo",
      bio: "Registra o cotidiano e as festas populares do recôncavo.",
      image: "assets/img/fotografo.jpg",
      location: "Santo Amaro, BA",
    },
    {
      id: 5,
      name: "Joana Rodrigues",
      specialty: "Escultora",
      bio: "Trabalha com barro e materiais da região.",
      image: "assets/img/escultora.jpg",
      location: "Seabra, BA",
    }
  ];

  // Lista de Obras (Galeria)
  private artworks: Artwork[] = [
    {
      id: 1,
      title: "Pôr do Sol no Sertão",
      artist: "Maria das Dores Silva",
      artistId: 1,
      type: "pintura",
      image: "/public/pintura-sol.png",
      description: "Óleo sobre tela retratando o fim de tarde no sertão.",
    },
    {
      id: 2,
      title: "Canto da Terra",
      artist: "João Pedro Santos",
      artistId: 2,
      type: "musica",
      image: "assets/img/viola.jpg",
      description: "Composição autoral sobre as raízes do interior.",
    },
    {
      id: 3,
      title: "Vozes do Sertão",
      artist: "Ana Clara Oliveira",
      artistId: 3,
      type: "video",
      image: "assets/img/doc-sertao.jpg",
      description: "Documentário de 15 minutos sobre a vida no sertão.",
    },
    {
      id: 4,
      title: "Feira Livre",
      artist: "Carlos Eduardo Lima",
      artistId: 4,
      type: "fotografia",
      image: "assets/img/feira-livre.jpg",
      description: "Série fotográfica das feiras do recôncavo.",
    },
    {
      id: 5,
      title: "Mulher da Roça",
      artist: "Joana Rodrigues",
      artistId: 5,
      type: "escultura",
      image: "assets/img/escultura-barro.jpg",
      description: "Escultura em barro representando a força feminina.",
    },
    {
      id: 7,
      title: "Caatinga Viva",
      artist: "Maria das Dores Silva",
      artistId: 1,
      type: "pintura",
      image: "assets/img/pintura-caatinga.jpg",
      description: "Aquarela da vegetação nativa da caatinga.",
    }
  ];

  constructor() { }

  // Métodos para pegar os dados
  getArtists() { return this.artists; }
  
  getArtworks() { return this.artworks; }

  // Método usado pelo filtro da Galeria
  getArtworksByType(type: string) {
    if (type === 'all') return this.artworks;
    return this.artworks.filter(a => a.type === type);
  }
}