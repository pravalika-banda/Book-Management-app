import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './add-book.html',
  styleUrls: ['./add-book.scss']
})
export class AddBook {
  book: any = {};
  categoriesInput: string = '';

  constructor(private http: HttpClient, public router: Router) {}

  addBook() {
    // Convert comma-separated categories string to array
    this.book.categories = this.categoriesInput
      .split(',')
      .map((c: string) => c.trim())
      .filter((c: string) => c);

    this.http.post('https://book-management-app-2zbf.onrender.com/api/books', this.book).subscribe({
      next: (res: any) => {
        alert('Book added successfully!');
        this.router.navigate(['/books']); // Navigate to book list
      },
      error: (err) => console.error(err),
    });
  }
}
