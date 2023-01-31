import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CepService } from 'src/app/core/services/cep/cep.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  cep = new FormControl('')
  rua = new FormControl('')
  num = new FormControl('')
  complemento = new FormControl('')
  bairro = new FormControl('')
  cidade = new FormControl('')
  estado = new FormControl('')
  senha = new FormControl('')
  senha2 = new FormControl('')

  @ViewChild('numero', { static: true }) numero!: ElementRef;  

  constructor(private cepService:CepService){}

  ngOnInit(): void {
    
  }

  preencheCEP(){

    this.cepService.getCEP(this.cep.value!).subscribe({

      next: (response) =>{

        this.rua.setValue(response.logradouro)
        this.bairro.setValue(response.bairro)
        this.cidade.setValue(response.localidade)
        this.estado.setValue(response.uf)
        this.numero.nativeElement.focus();        

      },

      error: (response) => {

        console.log(response)

      }

      

    })

  }

}
