import { Address } from "./address"

export interface User extends UserKyes{
  id: number
  nome: string
  email: string
  telefone: string
  address: Address[]
  senha: string
  termos: boolean
  compartilhar: boolean
  admin: boolean,
  newsletter?: boolean 

}

interface UserKyes{

  [key: string]: string | number | Address[] | boolean | undefined;

}