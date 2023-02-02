import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CepService } from 'src/app/core/services/cep/cep.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service'
import { Router } from '@angular/router';
import { Address } from 'src/app/core/models/address';

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

  constructor(private cepService:CepService, private formBuilder: FormBuilder, private userService:UserService, private router:Router){}

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
    
    let email = this.formulario.controls['email'].value
    
    if(this.userService.getEmail(email)){
      
      this.formulario.controls['email'].markAsDirty()
      return

    }

    

    let id = 1

    if(this.userService.getUsers()){

      console.log(this.userService.getUsers().length)
      id = this.userService.getUsers().length + 1

    }

    let address: Address[] = [{
      id: -1,
      cep: '',
      rua: '',
      num: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: ''
    }]

    let user: User = {
      id,
      nome: '',
      email: '',
      telefone: '',
      senha: '',
      termos: false,
      compartilhar: false,
      admin: false,
      address: address
    }

    user.nome = this.formulario.controls['nome'].value  
    user.email = email  
    user.telefone = this.formulario.controls['telefone'].value
    user.address[0].cep = this.formulario.controls['cep'].value
    user.address[0].rua = this.formulario.controls['rua'].value
    user.address[0].bairro = this.formulario.controls['bairro'].value
    user.address[0].cidade =  this.formulario.controls['cidade'].value
    user.address[0].estado =  this.formulario.controls['estado'].value    
    user.address[0].num =  this.formulario.controls['num'].value
    user.address[0].complemento =  this.formulario.controls['complemento'].value
    user.address[0].id = user.address.length
    user.senha = this.formulario.controls['senha'].value
    user.termos = this.formulario.controls['termos'].value
    user.compartilhar = this.formulario.controls['compartilhar'].value

    this.userService.saveUser(user)

    this.router.navigate(['/login'])
    

  }

}
