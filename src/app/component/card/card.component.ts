import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() book:Book;
@Input() i : number
@Output()eliminar = new EventEmitter<number>()
lanzarEvento():void{
  this.eliminar.emit(this.book.id_book)
}
}
