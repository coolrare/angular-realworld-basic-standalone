import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle',
  standalone: true,
})
export class FilterArticlePipe implements PipeTransform {
  transform(articles: any[], keyword: string): any[] {
    if (!keyword) {
      return articles;
    }
    return articles.filter((item) => item.title.includes(keyword));
  }
}
