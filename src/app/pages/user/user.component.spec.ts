import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/core/models/user';

import { UserComponent } from './user.component';




describe('UserComponent', () => {

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let user: User = {
    id:1,
    nome: "Eduardo Borges Dias",
    email:"eduardo.borges13@hotmail.com",
    telefone:"92995071242",
    senha:"asd",
    termos:true,
    compartilhar:false,
    admin:false,
    address:
    [
      {
        id:1,
        cep:"69040080",
        rua:"Rua Brigadeiro João Camarão",
        num:"222",
        complemento:"222",
        bairro:"Dom Pedro I",
        cidade:"Manaus",
        estado:"AM"
      },
      {
        id:2,
        cep:"69080000",
        rua:"Rua Marquesa de Santos",
        num:"123",
        complemento:"asdas",
        bairro:"Coroado",
        cidade:"Manaus",
        estado:"AM"
      }
    ]
  }

  beforeEach(async () => {
    

    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [HttpClient, HttpHandler],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    });

  it('should create', () => {

      
    expect(component).toBeTruthy();
  });
});
