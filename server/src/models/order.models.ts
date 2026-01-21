export interface Order {
  id: number
  destinationId: number
  product: string
  quantity: number
  deliveryDate: Date
  assignedDriverId: number
  status: string
  created_at: Date
  updated_at: Date
}
