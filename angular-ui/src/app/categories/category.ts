export interface Category {
  id: string
  description: string
  type: string // credit, debit
  status: string // active, inactive
  createdAt: Date
}
