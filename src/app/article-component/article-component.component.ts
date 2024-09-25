import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from './article';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  name: string = 'bob';
  sayHello(): void {
    alert('Bonjour !');
  }

  article: Article = {
    title: "Titre de l'article",
    author: 'John Doe',
    content: "Voici le contenu de l'article.",
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comment: '',
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
