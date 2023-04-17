import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
  ],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
