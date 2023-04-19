import { Component } from '@angular/core';
import { Book } from './shared/book';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'book-monkey';
  constructor(public auth: AuthService) {}
  book: Book | null = null;
  showList() {
    this.book = null;
  }
  showDetails(book: Book) {
    this.book = book;
  }
}
