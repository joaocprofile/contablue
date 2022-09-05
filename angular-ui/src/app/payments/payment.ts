

import { Category } from "../categories/category"
import { Person } from "../persons/person"

type PaymentType = 'payment' | 'receipt'
type StatusType = 'active' | 'inactive'

export interface Payment {
  id?: string
  type?: PaymentType
  category?: Category
  person?: Person
  document?: string
  description?: string
  document_value?: number
  discharge_value?: number
  due_date?: Date
  discharge_date?: Date
  status?: StatusType
  created_at?: Date
  updated_at?: Date
}
