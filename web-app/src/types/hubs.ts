export interface Hub {
  id: number
  name: string
  type: string
  address: string
  lat: number
  lng: number
  diesel_inventory: number
  petrol_inventory: number
  created_at: Date
  updated_at: Date
}
