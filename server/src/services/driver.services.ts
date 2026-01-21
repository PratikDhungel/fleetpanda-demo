import { pool } from '../db/db'
import { Driver } from '../models/driver.models'

async function getAllDrivers(): Promise<Driver[]> {
  const result = await pool.query<Driver>('SELECT * FROM drivers ORDER BY id ASC')

  return result.rows
}

export { getAllDrivers }
