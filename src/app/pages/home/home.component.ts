import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component'; // Importe o carrossel

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent], // Adicione na lista de imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}