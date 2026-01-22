import { Request, Response } from 'express'
import * as hubServices from '../services/hub.services'

async function getAllHubs(_: Request, res: Response) {
  try {
    const hubs = await hubServices.getAllHubs()

    res.status(200).json(hubs)
  } catch {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export { getAllHubs }
