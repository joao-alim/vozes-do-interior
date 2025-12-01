import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artwork } from '../../services/content.service'; // Importe a interface do seu serviço

@Component({
  selector: 'app-artwork-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})
export class ArtworkCardComponent {
  // O @Input() permite que a Galeria "entregue" os dados para este card
  @Input() artwork!: Artwork;
}