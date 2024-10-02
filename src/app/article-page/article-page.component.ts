import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule],
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
  };
}
