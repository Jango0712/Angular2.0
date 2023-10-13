import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
public books: any;
public data: any;
constructor(public servicioLibros : BooksService,private http: HttpClient){
  this.books = []
  this.servicioLibros.getAll().subscribe((response: Respuesta) =>{
    this.data = response
    console.log(response.data)
    this.books = response.data
 
  })
}

delete(id_book:number):void{
   
  this.books =  this.books.filter(val=> val.id_book !== id_book)
  this.servicioLibros.deleteBook(id_book).subscribe((data) =>{
    console.log(data);
    
  })}

// delete(id_book:number){
//   let borrar = this.servicioLibros.deleteBook(id_book)
//   if(borrar === true){
//     this.books = this.books.filter(book => book.id_book != id_book);
//   }
// }

buscar(id_book:number ):void{
  console.log(id_book)
  if(id_book)
      { 
        this.servicioLibros.getOne(id_book).subscribe((data:any) =>
        {  
          console.log(data);
          this.books= [data.data]
        })
      }else{
        this.servicioLibros.getAll().subscribe((data:any)=>
        {
          console.log(data);
          this.books= data.data
        })
      
      }
}

// buscar(id_book:number){
//   if(id_book){
//     this.books = [(this.servicioLibros.getOne(id_book))];
//   }else{ this.books = this.servicioLibros.getAll()};
// }
 }

