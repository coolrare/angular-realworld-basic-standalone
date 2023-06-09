import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() keywordSearch = new EventEmitter<string>();
  keyword = '';
  highlightTitle = false;
  fontSize = 24;

  search(event: MouseEvent) {
    this.fontSize += 2;
    this.highlightTitle = !this.highlightTitle;

    console.log(event);

    this.keywordSearch.emit(this.keyword);
  }
}
