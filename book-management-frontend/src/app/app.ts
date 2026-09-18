import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddBook } from './add-book/add-book';
import { EditBook } from './edit-book/edit-book';
import { BookList } from "./book-list/book-list";
import { BookDetail } from './book-details/book-details';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddBook, EditBook, BookList,BookDetail],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('book-management-frontend');
}
