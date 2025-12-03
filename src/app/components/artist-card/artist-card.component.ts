import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artist } from '../../services/content.service'; // Importe a interface correta

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.css'
})
export class ArtistCardComponent {
  @Input() artist!: Artist;
}