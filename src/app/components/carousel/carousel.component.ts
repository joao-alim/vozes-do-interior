import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit {

  slides = [
    {
      url: 'https://i.imgur.com/QO8WrCV.png', 
      title: 'A Alma do Sertão',
      desc: 'Onde a terra seca encontra a inspiração.'
    },
    {
      url: 'https://i.imgur.com/1u0Yk3N.png',
      title: 'Sons da Terra',
      desc: 'Melodias que nascem da raiz.'
    },
    {
      url: 'https://i.imgur.com/YRz8akx.png',
      title: 'Cores Vivas',
      desc: 'A arte visual que desafia o cinza.'
    }
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  
  goToSlide(index: number) {
    this.currentIndex = index;
  }
}