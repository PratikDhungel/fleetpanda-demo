import { pool } from '../db/db'
import { Vehicle } from '../models/vehicle.models'

async function getAllVehicles(): Promise<Vehicle[]> {
  const result = await pool.query<Vehicle>('SELECT * FROM vehicles ORDER BY id ASC')

  return result.rows
}

export { getAllVehicles }
