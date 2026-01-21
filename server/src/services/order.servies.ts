import { pool } from '../db/db'
import { Order } from '../models/order.models'

interface OrdersInTransit {
  orderId: number
  driverId: number
  driverName: string
  lat: number
  lng: number
  recordedAt: Date
  destinationId: number
  destinationName: string
  destinationLat: number
  destinationLng: number
}

async function getAllOrders(): Promise<Order[]> {
  const result = await pool.query<Order>('SELECT * FROM orders ORDER BY id ASC')

  return result.rows
}

async function getAllOrdersInTransit() {
  const result = await pool.query<OrdersInTransit>(
    `
    SELECT DISTINCT ON (dl.order_id)
    dl.order_id,
    dl.driver_id,
    d.name AS driver_name,
    dl.lat,
    dl.lng,
    dl.recorded_at,
    o.destination_id,
    h.name as destination_name,
    h.lat as destination_lat,
    h.lng as destination_lng
    FROM drivers_location dl
    left JOIN orders o ON dl.order_id = o.id
    left join hubs h on h.id = o.destination_id
    left JOIN drivers d ON dl.driver_id = d.id
    WHERE o.status = 'in_transit'
    ORDER BY dl.order_id, dl.recorded_at DESC;      
    `,
  )

  return result.rows
}

export { getAllOrders, getAllOrdersInTransit }
