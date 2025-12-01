import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkCardComponent } from '../../components/artwork-card/artwork-card.component';

// O IMPORT IMPORTANTE:
// Certifique-se de que está importando 'ContentService' (a classe) 
// e 'Artwork' (a interface) do arquivo correto.
import { ContentService, Artwork } from '../../services/content.service'; 

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, ArtworkCardComponent],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  
  allArtworks: Artwork[] = [];
  filteredArtworks: Artwork[] = [];
  currentFilter: string = 'all';

  // O erro estava aqui. Se o passo 1 estiver certo, isso aqui vai funcionar agora.
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.allArtworks = this.contentService.getArtworks();
    this.filteredArtworks = this.allArtworks;
  }

  filterGallery(type: string) {
    this.currentFilter = type;
    if (type === 'all') {
      this.filteredArtworks = this.allArtworks;
    } else {
      this.filteredArtworks = this.allArtworks.filter(art => art.type === type);
    }
  }
}