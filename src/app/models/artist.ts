export interface Artist {
    id: number;
    name: string;
    category: string; // Ex: Música, Artes Visuais, Cinema
    bio: string;
    imageUrl: string;
    instagram?: string; // Opcional
  }