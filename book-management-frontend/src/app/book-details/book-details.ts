import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BookList } from '../book-list/book-list';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './book-details.html',
  styleUrls: ['./book-details.scss']
})
export class BookDetail {
  book: any = {};
  bookId: string |null = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, public router: Router) {
    this.bookId = this.route.snapshot.queryParamMap.get('id');
    if (!this.bookId){
         return
    }
    this.getBookDetails();
  }

  getBookDetails() {
    this.http
      .get(`https://book-management-app-2zbf.onrender.com/api/books/${this.bookId}`)
      .subscribe({
        next: (res: any) => (this.book = res),
        error: (err) => console.error(err),
      });
  }
}
