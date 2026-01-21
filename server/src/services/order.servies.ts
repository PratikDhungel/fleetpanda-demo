import { pool } from '../db/db'
import { Order } from '../models/order.models'

async function getAllOrders(): Promise<Order[]> {
  const result = await pool.query<Order>('SELECT * FROM orders ORDER BY id ASC')

  return result.rows
}

export { getAllOrders }
