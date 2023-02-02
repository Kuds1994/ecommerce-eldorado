import { Address } from "./address"

export interface User {
  id: number
  nome: string
  email: string
  telefone: string
  address: Address[]
  senha: string
  termos: boolean
  compartilhar: boolean
  admin: boolean

}