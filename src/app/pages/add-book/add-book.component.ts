import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {


  constructor(private servicioLibros : BooksService, http : HttpClient){
  }

  public add(title:string, type:string, author:string, price:number, photo:string, id_book:number, id_user:number):void{


 this.servicioLibros.addBook(new Book (title, type, author, price, photo, id_book, id_user)).subscribe((data:any) =>{
  console.log(data);
  
})}
}
