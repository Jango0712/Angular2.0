import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
public myForm : FormGroup;
constructor(private formBuilder : FormBuilder){
  this.buildForm();
}

public iniciar(){
  console.log(this.myForm.value);
}

private buildForm()
{
let minCaracteres = 8;
this.myForm = this.formBuilder.group({
  email:[, [Validators.required, Validators.email]],
  password:[,[ Validators.required, Validators.minLength(minCaracteres)]]})
}
}
 