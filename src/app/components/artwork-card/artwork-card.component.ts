import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artwork } from '../../services/content.service';

@Component({
  selector: 'app-artwork-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})
export class ArtworkCardComponent {
  @Input() artwork!: Artwork;
}