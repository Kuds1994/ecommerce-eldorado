import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CepService } from 'src/app/core/services/cep/cep.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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

  @ViewChild('numero', { static: true }) numero!: ElementRef;  

  constructor(private cepService:CepService, private formBuilder: FormBuilder, private userService:UserService){}

  ngOnInit(): void {
    
  }

  preencheCEP(){

    this.cepService.getCEP(this.formulario.controls['cep'].value).subscribe({

      next: (response) =>{

        this.formulario.controls['rua'].setValue(response.logradouro)
        this.formulario.controls['bairro'].setValue(response.bairro)
        this.formulario.controls['cidade'].setValue(response.localidade)
        this.formulario.controls['estado'].setValue(response.uf)
        this.numero.nativeElement.focus();        

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

    let user: User = {
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
      compartilhar: false
    }

    user.nome = this.formulario.controls['nome'].value
    user.email = this.formulario.controls['email'].value
    user.telefone = this.formulario.controls['telefone'].value
    user.rua = this.formulario.controls['rua'].value
    user.bairro = this.formulario.controls['bairro'].value
    user.cidade =  this.formulario.controls['cidade'].value
    user.estado =  this.formulario.controls['estado'].value
    user.cidade =  this.formulario.controls['cidade'].value
    user.estado =  this.formulario.controls['estado'].value
    user.senha = this.formulario.controls['senha'].value
    user.termos = this.formulario.controls['termos'].value
    user.compartilhar = this.formulario.controls['compartilhar'].value

    console.log(user)

    this.userService.saveUser(user)

    console.log(localStorage.getItem('user'))

    /*user.nome = this.nome.value!
    user.email = this.email.value!
    user.telefone = this.telefone.value!
    user.cep = this.cep.value!
    user.rua = this.rua.value!*/
    

  }

}
