import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { TagsComponent } from './tags/tags.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ArticlesComponent,
    TagsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articleService = inject(ArticleService);

  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';

  // 預設為全部文章
  list = this.articleService.searchArticles('');

  // 根據關鍵字搜尋文章
  searchArticles(keyword: string) {
    this.list = this.articleService.searchArticles(keyword);
  }
}
