import Router from 'express'
import { getAllDrivers } from '../controllers/driver.controllers'

const router = Router()

router.get('/all-drivers', getAllDrivers)

export default router
