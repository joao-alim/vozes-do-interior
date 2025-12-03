import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from '../../components/artist-card/artist-card.component';
import { ContentService, Artist } from '../../services/content.service'; // Importe o Serviço

@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [CommonModule, ArtistCardComponent],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent implements OnInit {
  
  artistsList: Artist[] = [];
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.artistsList = this.contentService.getArtists();
    
    console.log("Lista de artistas carregada:", this.artistsList); // Para conferir no console
  }
}