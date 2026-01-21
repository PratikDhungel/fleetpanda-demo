import Router from 'express'
import { getAllVehicles } from '../controllers/vehicle.controllers'

const router = Router()

router.get('/all-vehicles', getAllVehicles)

export default router
