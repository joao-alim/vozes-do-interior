import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentService, Artist } from '../../services/content.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  user: Artist = {} as Artist;

  newArtwork = {
    title: '',
    type: '',
    description: '',
    imageUrl: '' 
  };

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.user = this.contentService.getCurrentUser();
  }

  saveProfile() {
    this.contentService.updateProfile(this.user);
    alert('Perfil atualizado com sucesso!');
  }

  uploadArtwork() {
    if (!this.newArtwork.title || !this.newArtwork.type) {
      alert('Preencha o título e a categoria da obra.');
      return;
    }
    this.contentService.addArtwork({
      title: this.newArtwork.title,
      type: this.newArtwork.type,
      description: this.newArtwork.description,
      image: this.newArtwork.imageUrl || "https://i.pinimg.com/236x/23/40/8e/23408e565fc3f43454636fec27572d1f.jpg" // Aqui usamos a URL que o usuário colou
    
    });

    alert('Obra publicada! Confira na aba Galeria.');

    this.newArtwork = { title: '', type: '', description: '', imageUrl: '' };
  }
}