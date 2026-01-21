import { pool } from '../db/db'
import { Hub } from '../models/hub.models'

async function getAllHubs(): Promise<Hub[]> {
  const result = await pool.query<Hub>('SELECT * FROM hubs ORDER BY id ASC')

  return result.rows
}

export { getAllHubs }
