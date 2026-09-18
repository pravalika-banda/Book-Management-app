import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  _id?: string;
  title: string;        // matches backend
  author: string;
  description: string;
  price: number;
  categories: string[];
  createdAt: string;
  updatedAt: string;
  coverUrl?: string;  
  name?:string
}

@Injectable({ providedIn: 'root' })
export class BookService {
  private apiUrl = 'https://book-management-app-2zbf.onrender.com/api/books'; // backend URL

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
