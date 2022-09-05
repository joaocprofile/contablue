export interface Person {
  id?: string
  name?: string
  customer?: boolean
  provider?: boolean
  document?: string
  cep?: string
  address?: string
  state?: string
  city?: string
  complement?: string
  status?: string // active or inactive
  createdAt?: Date
}
