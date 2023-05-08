import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { TagsComponent } from './tags/tags.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './article.service';
import { FilterArticlePipe } from './filter-article.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ArticlesComponent,
    TagsComponent,
    FooterComponent,
    FilterArticlePipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articleService = inject(ArticleService);

  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';

  // 預設為全部文章
  list = this.articleService.searchArticles('');

  // 要搜尋的關鍵字 (前端搜尋)
  keyword = '';

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((data) => {
      this.list = data;
    });
  }

  searchArticles(keyword: string) {
    // 指定搜尋關鍵字
    this.keyword = keyword;
  }
}
