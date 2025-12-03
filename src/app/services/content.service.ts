import { Injectable } from '@angular/core';

export interface Artist {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  location: string;
  email?: string;
  isArtist?: boolean; // NOVO CAMPO: Define se é artista ou não
}

export interface Artwork {
  id: number;
  title: string;
  artist: string;
  artistId: number;
  type: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private currentUser: Artist = {
    id: 99,
    name: "Visitante",
    specialty: "Apreciador de Arte",
    bio: "Explorando as raízes do interior.",
    image: "https://i.pinimg.com/236x/23/40/8e/23408e565fc3f43454636fec27572d1f.jpg",
    location: "Salvador, BA",
    email: "visitante@vozes.com",
    isArtist: false 
  };

  private artists: Artist[] = [
    {
      id: 1,
      name: "Maria das Dores Silva",
      specialty: "Pintora",
      bio: "Retrata paisagens do sertão baiano com cores vibrantes.",
      image: "https://thumbs.dreamstime.com/b/pintura-e-criatividade-com-uma-pintora-ou-artista-mulher-trabalhando-em-tela-sua-oficina-est%C3%BAdio-art%C3%ADstica-arte-jovem-feminina-258327393.jpg",
      location: "Feira de Santana, BA",
    },
    {
      id: 2,
      name: "João Pedro Santos",
      specialty: "Músico",
      bio: "Compositor e violeiro, preserva tradições musicais do interior.",
      image: "https://cursosdecanto.com.br/wp-content/uploads/2023/09/musicos-cantando-tocando-dia-do-musico-artigo-completo-4.jpg",
      location: "Jacobina, BA",
    },
    {
      id: 3,
      name: "Ana Clara Oliveira",
      specialty: "Cineasta",
      bio: "Diretora de documentários sobre a vida no sertão.",
      image: "https://media-manager.noticiasaominuto.com.br/960/naom_5c4b10127359a.webp",
      location: "Vitória da Conquista, BA",
    },
    {
      id: 4,
      name: "Carlos Eduardo Lima",
      specialty: "Fotógrafo",
      bio: "Registra o cotidiano e as festas populares do recôncavo.",
      image: "https://sebrae.com.br/Sebrae/Portal%20Sebrae/Ideias%20de%20Negocio/Importer/Images/520_background.webp",
      location: "Santo Amaro, BA",
    },
    {
      id: 5,
      name: "Joana Rodrigues",
      specialty: "Escultora",
      bio: "Trabalha com barro e materiais da região.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSBGreDF8Ky9Jr7weM8AUE_avm6y3ykrtx0q6G7CBtT_i8wVc7SeVlltPKxMTn2XJtgaioULPqRpywwGEzenayPO19_y_R2yjKdP_YL1qgO8F3nyZHwRL8T8KKeDQy1tlebhyphenhyphenvsrVwe6Yh/s1600/L%25C3%25AAda+Gontijo+-+cer%25C3%25A2micas2.jpg",
      location: "Seabra, BA",
    }
  ];

  private artworks: Artwork[] = [
    {
      id: 1,
      title: "Pôr do Sol no Sertão",
      artist: "Maria das Dores Silva",
      artistId: 1,
      type: "fotografia",
      image: "https://i.imgur.com/B40iSDn.jpeg",
      description: "Óleo sobre tela retratando o fim de tarde no sertão.",
    },
    {
      id: 2,
      title: "SAMIRA",
      artist: "Samira",
      artistId: 2,
      type: "musica",
      image: "https://i.imgur.com/sIhPzvh.png",
      description: "Composição autoral sobre as suas raízes.",
    },
    {
      id: 3,
      title: "Vozes do Sertão",
      artist: "Ana Clara Oliveira",
      artistId: 3,
      type: "video",
      image: "https://i.ytimg.com/vi/qMmsIGNGltg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-f-c9d1_E-VmeXCe_zlzKxAfGPg",
      description: "Documentário de 15 minutos sobre a vida no sertão.",
    },
    {
      id: 4,
      title: "Feira Livre",
      artist: "Carlos Eduardo Lima",
      artistId: 4,
      type: "fotografia",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Feira_livre.jpg",
      description: "Série fotográfica das feiras do recôncavo.",
    },
    {
      id: 5,
      title: "Namoradeira",
      artist: "Joana Rodrigues",
      artistId: 5,
      type: "escultura",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_725280-MLB71823179294_092023-F.webp",
      description: "Escultura em barro representando a força feminina.",
    },
    {
      id: 7,
      title: "Caatinga Viva",
      artist: "Maria das Dores Silva",
      artistId: 1,
      type: "pintura",
      image: "https://scontent-for2-2.xx.fbcdn.net/v/t39.30808-6/465650304_9019552561410271_1238352134248129731_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeHXdsARemoXW88uBKlp6q9EUPRM2rd8Wz5Q9Ezat3xbPuFE0FmsekWN5INw-nLzwJQpmkk27GqNa5zpmq0C1n2e&_nc_ohc=tMg9mTCBua4Q7kNvwFhPNO5&_nc_oc=Adnh2j-1eAk4nqVAK5wfsnEil6wCXlpOFk1N4cdPunb4GBs-CtMJ1ubsSOeo0o2pe5I&_nc_zt=23&_nc_ht=scontent-for2-2.xx&_nc_gid=JtoeVIuU0Hkt8ZfHmfq7aw&oh=00_Afk5_MScz5HzJuHWcNBoUrspLIkVHISGAbgBGdAtFnXnmw&oe=6934EB2E",
      description: "Aquarela da vegetação nativa da caatinga.",
    }
  ];

  constructor() { }

  
  getArtists() {
    if (this.currentUser.isArtist) {
      return [this.currentUser, ...this.artists];
    }
    return this.artists;
  }

  getArtworks() { return this.artworks; }
  
  getArtworksByType(type: string) {
    if (type === 'all') return this.artworks;
    return this.artworks.filter(a => a.type === type);
  }

  getCurrentUser() { return this.currentUser; }

  updateProfile(updatedData: Artist) {
    this.currentUser = updatedData;
  }

  addArtwork(newArtwork: any) {
    const artwork: Artwork = {
      id: this.artworks.length + 1,
      title: newArtwork.title,
      type: newArtwork.type,
      description: newArtwork.description,
      image: newArtwork.image || 'assets/img/placeholder.jpg',
      artist: this.currentUser.name,
      artistId: this.currentUser.id
    };
    this.artworks.push(artwork);
  }
}