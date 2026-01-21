import { pool } from '../db/db'
import { Hub } from '../models/hub.models'

export const getAllHubs = async (): Promise<Hub[]> => {
  const result = await pool.query<Hub>('SELECT * FROM hubs ORDER BY id ASC')

  return result.rows
}
