import { pool } from '../db/db'
import { Driver } from '../models/driver.models'

async function getAllDrivers(): Promise<Driver[]> {
  const result = await pool.query<Driver>('SELECT * FROM drivers ORDER BY id ASC')

  console.log('result', result.rows)

  return result.rows
}

export { getAllDrivers }
