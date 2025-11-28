import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngFor e *ngIf

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit {
  
  // Lista de Slides (Aqui você trocará pelas imagens reais da Bahia depois)
  slides = [
    {
      // Caminho relativo à pasta public
      url: 'img/sertao.jpg', 
      title: 'A Alma do Sertão',
      desc: 'Onde a terra seca encontra a inspiração.'
    },
    {
      url: 'img/musica.jpg',
      title: 'Sons da Terra',
      desc: 'Melodias que nascem da raiz.'
    },
    {
      url: 'img/arte.jpg',
      title: 'Cores Vivas',
      desc: 'A arte visual que desafia o cinza.'
    }
  ];

  currentIndex = 0;

  ngOnInit(): void {
    // Opcional: Passar slide automaticamente a cada 5 segundos
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    // Lógica matemática: Se chegar no fim, volta para o 0 (operador resto %)
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    // Lógica para voltar, considerando que se for < 0 vai para o último
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  
  goToSlide(index: number) {
    this.currentIndex = index;
  }
}