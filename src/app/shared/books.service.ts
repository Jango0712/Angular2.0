import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
private url = 'http://localhost:3000/libros'
private url2 = 'http://localhost:3000/librosid'
private books: any;

  constructor(private http: HttpClient) {}

getAll(){
  return this.http.get(this.url)
}
// getAll():Book[]{
//   return this.books
// }
getOne(id_book:number):Observable<Object>{
  return this.http.get( `${this.url2}?id_book=${id_book}` )
}

// getOne(id_book:number):Book{
//   return this.books.find(book => book.id_book == id_book);
//  }

addBook(book:Book){
  return this.http.post(this.url,book)
}

// addBook(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number){
//   this.books.push(new Book(title, type, author,price, photo, id_book, id_user))
//   }

deleteBook(id_book:number){
  return this.http.request('delete' , this.url, { body: { id_book:id_book}})
 }

// deleteBook(id_book:number):boolean{
//     let eliminar = this.books.findIndex(val => val.id_book != id_book);
//     if(eliminar !== -1){
//       this.books.filter(val => val.id_book == id_book);
//       return true;

//     }else{
//       return false;
//     }
//   }

edit(book:Book)
{
  return this.http.put(this.url,book)
}

//  edit(book:Book):boolean{
//   let modificar = this.books.findIndex(val => val.id_book == book.id_book);
//   if(modificar !== -1){
//     this.books[modificar] = book;
//     return true;
//   } return false;
// };
  } 

