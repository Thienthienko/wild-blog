import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  articles: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
  }

  @Input() article!: {
    id: number;
    title: string;
    author: string;
    content: string;
    image: string;
    isPublished: boolean;
    comment: string;
    likes: number;
    isLiked: boolean;
  };

  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  sendLike() {
    this.notifyParent.emit(
      `L' article ${this.article.title} vient d'être liké`
    );
    this.article.isLiked = true;
  }
}
