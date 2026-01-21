import Router from 'express'
import { getAllOrders } from '../controllers/order.controllers'

const router = Router()

router.get('/all-orders', getAllOrders)

export default router
