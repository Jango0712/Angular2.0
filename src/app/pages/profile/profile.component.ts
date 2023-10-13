import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
public user:User
constructor(){
  this.user = new User (5575, 'Jan', 'Gomez Marchan', 'jango@gmail.com', 'https://this-person-does-not-exist.com/img/avatar-gen4bc0a13cfcc7feb438730ab229ab4ff4.jpg', 'Jgm'
  )
}
update(nombre:HTMLInputElement, apellidos:HTMLInputElement, correo:HTMLInputElement, url:HTMLInputElement){
  this.user.nombre = nombre.value;
  this.user.apellidos = apellidos.value;
  this.user.correo = correo.value;
  this.user.photo = url.value;
console.log(this.user.nombre)
}
}
