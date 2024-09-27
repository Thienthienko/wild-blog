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

  article: Article = {
    title: 'Baseball',
    author: 'John Doe',
    content:
      'Le baseball se joue avec deux équipes qui alternent en défense et en attaque. Neuf joueurs se trouvent sur le terrain en défense : un lanceur, un receveur et sept autres joueurs qui sont en défense répartis sur le terrain pour rattraper la balle, si possible de volée pour éliminer le batteur.',
    image: 'baseball.png',
    isPublished: true,
    comment: '',
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
