import { Request, Response } from 'express'
import * as driverServices from '../services/driver.services'

async function getAllDrivers(_: Request, res: Response) {
  try {
    const drivers = await driverServices.getAllDrivers()

    res.status(200).json({ data: drivers })
  } catch {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export { getAllDrivers }
