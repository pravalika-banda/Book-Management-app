import { Component, OnInit } from '@angular/core';
import { Book } from '../services/service';
import { BookService } from '../services/service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddBook } from '../add-book/add-book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.scss'],
})
export class BookList implements OnInit {
  books: Book[] = [];
  loading = true;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.loading = true;

    setTimeout(() => {
      this.bookService.getBooks().subscribe({
        next: (res) => {
          this.books = res;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        },
      });
    }, 100);
  }

  deleteBook(id: string | undefined) {
    if (!id) return;
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(() => this.fetchBooks());
    }
  }
  editBook(id: string | undefined) {
    this.router.navigate(['/EditBook'],{
     queryParams:{id1:id}
     });
    }
}


