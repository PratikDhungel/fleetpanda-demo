import { Request, Response } from 'express'
import * as vehicleServices from '../services/vehicle.services'

async function getAllVehicles(_: Request, res: Response) {
  try {
    const vehicles = await vehicleServices.getAllVehicles()

    res.status(200).json({ data: vehicles })
  } catch {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export { getAllVehicles }
