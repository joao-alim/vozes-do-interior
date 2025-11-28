import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artist } from '../../models/artist'; // Importe o modelo

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.css'
})
export class ArtistCardComponent {
  @Input() artist!: Artist; // Recebe os dados do pai
}