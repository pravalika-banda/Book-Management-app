import { Routes } from '@angular/router';
import { AddBook } from './add-book/add-book';
import { EditBook } from './edit-book/edit-book';
import { BookList } from './book-list/book-list';
import { BookDetail } from './book-details/book-details';

export const routes: Routes = [
    {path:'',redirectTo:'BookList', pathMatch:'full'},
    {path:'BookList',component:BookList},
    {path:'AddBook',component:AddBook},
    {path:'EditBook',component:EditBook},
    {path:'BookDetail',component:BookDetail},
    {path:'***',redirectTo:'BookList',pathMatch:'full'}
];
