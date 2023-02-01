import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CepService } from 'src/app/core/services/cep/cep.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  formulario: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.min(10)]],
    telefone: ['', Validators.required],
    cep: ['', Validators.required],
    rua: ['', Validators.required],
    num: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    senha: ['', Validators.required],
    senha2: ['', Validators.required],
    termos: [false, Validators.required],
    compartilhar: [false],
  })

  user: User = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    num: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    senha: '',
    termos: false,
    compartilhar: false,
    admin: false
  }

  constructor(private authService: AuthService, private cepService:CepService, private formBuilder: FormBuilder, private userService:UserService, private router:Router) { 


  }

  preencheCEP(){

    this.cepService.getCEP(this.formulario.controls['cep'].value).subscribe({

      next: (response) =>{

        this.formulario.controls['rua'].setValue(response.logradouro)
        this.formulario.controls['bairro'].setValue(response.bairro)
        this.formulario.controls['cidade'].setValue(response.localidade)
        this.formulario.controls['estado'].setValue(response.uf)     

      },

      error: (response) => {

        console.log(response)

      }      

    })

  }

  saveUser(){

    if(!this.formulario.valid){
      this.formulario.markAllAsTouched()
      return;
    }
    
    let email = this.formulario.controls['email'].value
    
    if(this.userService.getEmail(email)){
      
      this.formulario.controls['email'].markAsDirty()
      return

    }
   


    /*user.nome = this.formulario.controls['nome'].value  
    user.email = email  
    user.telefone = this.formulario.controls['telefone'].value
    user.rua = this.formulario.controls['rua'].value
    user.bairro = this.formulario.controls['bairro'].value
    user.cidade =  this.formulario.controls['cidade'].value
    user.estado =  this.formulario.controls['estado'].value
    user.cidade =  this.formulario.controls['cidade'].value
    user.estado =  this.formulario.controls['estado'].value
    user.senha = this.formulario.controls['senha'].value
    user.termos = this.formulario.controls['termos'].value
    user.compartilhar = this.formulario.controls['compartilhar'].value*/

    this.userService.updateUser(this.user)

    this.router.navigate(['/login'])
    

  }

  

}
