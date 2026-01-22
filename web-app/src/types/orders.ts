export interface OrdersInTransit {
  order_id: number
  driver_id: number
  driver_name: string
  lat: number
  lng: number
  recordedAt: Date
  vehicle_id: number
  vehicle_registration: string
  destination_id: number
  destination_name: string
  destination_lat: number
  destination_lng: number
}
