import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/service';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-book.html',
  styleUrls: ['./edit-book.scss'],
})
export class EditBook implements OnInit {
  bookId = '';
  book: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.queryParamMap.get('id') || '';
    console.log('BOOK ID FROM URL =', this.bookId);

     if (this.bookId) this.loadBook();
  }

  loadBook() {
    this.bookService.getBook(this.bookId).subscribe(
      (res) => (this.book = res),
      (err) => console.error('Error loading book:', err)
    );
  }

  updateBook() {
    this.bookService.updateBook(this.bookId, this.book).subscribe(
      () => {
        alert('Book updated successfully!');
        this.router.navigate(['/books']);
      },
      (err) => console.error('Error updating book:', err)
    );
  }
}
