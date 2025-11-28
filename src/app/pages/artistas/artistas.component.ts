import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from '../../components/artist-card/artist-card.component'; // Importe o Card
import { ArtistsService } from '../../services/artists.service'; // Importe o Serviço
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [CommonModule, ArtistCardComponent], // Adicione o componente aqui
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent implements OnInit {
  
  artistsList: Artist[] = [];

  // Injetamos o serviço no construtor
  constructor(private artistsService: ArtistsService) {}

  ngOnInit(): void {
    // Ao iniciar a página, buscamos a lista
    this.artistsList = this.artistsService.getArtists();
  }
}