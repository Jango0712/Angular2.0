import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  public registro : FormGroup;
  constructor(private formBuilder : FormBuilder){
    this.buildForm();
  }
  
  public registrar(){
    console.log(this.registro.value);
  }
  
  private buildForm()
  {
  let minCaracteres = 8;
  this.registro = this.formBuilder.group({
    nombre:[, Validators.required],
    email2:[, [Validators.required, Validators.email]],
    password2:[,[ Validators.required, Validators.minLength(minCaracteres)]],
    checkPassword:[, [Validators.required, this.checkPasswords]]})
  }

  checkPasswords(control:AbstractControl){
    let resultado = {matchPassword: true};
    if(control.parent?.value.password2 == control.value)
    resultado =null;
  return resultado;
  }
}
