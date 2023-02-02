import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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

  formularioEndereco: FormGroup = this.formBuilder.group({

    cep: ['', Validators.required],
    rua: ['', Validators.required],
    num: ['', Validators.required],
    complemento: [''],
    bairro: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],

  })

  formulario: FormGroup = this.formBuilder.group({    

    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.min(10)]],
    telefone: ['', Validators.required],
    formEnderecos: this.formBuilder.array([]),
    termos: [false, Validators.required],
    compartilhar: [false],
    newsletter: [false]

  })
  address: Address[] = [{
    id: -1,
    cep: '',
    rua: '',
    num: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  }]

  user: User = {
    id: -1,
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

  preencheCEP(i: number){

    this.cepService.getCEP(this.fb.at(i).get('cep')!.value).subscribe({

      next: (response) => {

        this.fb.controls[i].get('rua')!.setValue(response.logradouro)
        this.fb.controls[i].get('bairro')!.setValue(response.bairro)
        this.fb.controls[i].get('cidade')!.setValue(response.localidade)
        this.fb.controls[i].get('estado')!.setValue(response.uf)     

      },

      error: (response) => {

        console.log(response)

      }      

    })

  }

  get fb() {
    
    return this.formulario.controls["formEnderecos"] as FormArray

  }

  getControls(id:number) {
    
    return this.fb.at(id) as FormGroup

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

    user.address.forEach((address, i) => {     

      this.fb.push(this.formBuilder.group({

          cep: ['', Validators.required],
          rua: ['', Validators.required],
          num: ['', Validators.required],
          complemento: [''],
          bairro: ['', Validators.required],
          cidade: ['', Validators.required],
          estado: ['', Validators.required],
    
      }))

      this.getControls(i).get('cep')?.setValue(address.cep) 
      this.getControls(i).get('rua')?.setValue(address.rua)
      this.getControls(i).get('num')?.setValue(address.num)
      this.getControls(i).get('complemento')?.setValue(address.complemento)
      this.getControls(i).get('bairro')?.setValue(address.bairro)
      this.getControls(i).get('cidade')?.setValue(address.cidade)
      this.getControls(i).get('estado')?.setValue(address.estado)

    })



  }

  getUser(){

    this.user.nome = this.formulario.controls['nome'].value
    this.user.email = this.formulario.controls['email'].value
    this.user.telefone = this.formulario.controls['telefone'].value
    

    this.fb.controls.forEach((controls, i) => {

      this.user.address[i].bairro = controls.value['bairro']
      this.user.address[i].cep = controls.value['cep']
      this.user.address[i].rua = controls.value['rua']
      this.user.address[i].complemento = controls.value['complemento']
      this.user.address[i].num = controls.value['num']
      this.user.address[i].cidade = controls.value['cidade']
      this.user.address[i].estado = controls.value['estado']      

    })

  }

  saveAddress(endereco: number){

    this.getUser()

    let address = this.user.address[endereco]

    this.userService.updateAddress(this.user.id, address)

  }

  addAddress(){

    let address: Address = {
      id: this.user.address.length + 1,
      cep: '',
      rua: '',
      num: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: ''
    }

    let addressForm = this.formBuilder.group({
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      num: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    })  

    this.fb.push(addressForm)
    this.user.address.push(address)

  }

  mostrar(asd: any){

    console.log(asd)
  }
  


}
