import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/core/models/address';
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

  hidden = false

  formulario: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.min(10)]],
    telefone: ['', Validators.required],
    
    termos: [false, Validators.required],
    compartilhar: [false],
    newsletter: [false]
  })

  formularioEndereco: FormGroup = this.formBuilder.group({
    cep: ['', Validators.required],
    rua: ['', Validators.required],
    num: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
  })

  formularioEnderecoSecundario: FormGroup = this.formBuilder.group({
    cep: ['', Validators.required],
    rua: ['', Validators.required],
    num: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
  })

  address: Address[] = [{
    cep: '',
    rua: '',
    num: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  }]

  user: User = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    termos: false,
    compartilhar: false,
    admin: false,
    address: this.address
  }

  constructor(private authService: AuthService, private cepService:CepService, private formBuilder: FormBuilder, private userService:UserService, private router:Router) { 

    this.user = this.userService.getUser(this.authService.getToken())
    this.setUser(this.user)

  }

  preencheCEP(){

    this.cepService.getCEP(this.formularioEndereco.controls['cep'].value).subscribe({

      next: (response) =>{

        this.formularioEndereco.controls['rua'].setValue(response.logradouro)
        this.formularioEndereco.controls['bairro'].setValue(response.bairro)
        this.formularioEndereco.controls['cidade'].setValue(response.localidade)
        this.formularioEndereco.controls['estado'].setValue(response.uf)     

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

    this.userService.updateUser(this.user)    

  }

  setUser(user: User){

    this.formulario.controls['nome'].setValue(user.nome)
    this.formulario.controls['email'].setValue(user.email)
    this.formulario.controls['telefone'].setValue(user.telefone)
    this.formularioEndereco.controls['cep'].setValue(user.address[0].cep)
    this.formularioEndereco.controls['rua'].setValue(user.address[0].rua)
    this.formularioEndereco.controls['num'].setValue(user.address[0].num)
    this.formularioEndereco.controls['complemento'].setValue(user.address[0].complemento)
    this.formularioEndereco.controls['bairro'].setValue(user.address[0].bairro)
    this.formularioEndereco.controls['cidade'].setValue(user.address[0].cidade)
    this.formularioEndereco.controls['estado'].setValue(user.address[0].estado)

    if(user.address.length > 1){

      this.formularioEnderecoSecundario.controls['cep'].setValue(user.address[1].cep)
      this.formularioEnderecoSecundario.controls['rua'].setValue(user.address[1].rua)
      this.formularioEnderecoSecundario.controls['num'].setValue(user.address[1].num)
      this.formularioEnderecoSecundario.controls['complemento'].setValue(user.address[1].complemento)
      this.formularioEnderecoSecundario.controls['bairro'].setValue(user.address[1].bairro)
      this.formularioEnderecoSecundario.controls['cidade'].setValue(user.address[1].cidade)
      this.formularioEnderecoSecundario.controls['estado'].setValue(user.address[1].estado)



    }

  }

  saveAddress(endereco: number){

    this.userService.updateUser(this.user)

  }
  

}
