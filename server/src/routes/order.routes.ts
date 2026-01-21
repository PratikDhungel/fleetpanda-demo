import Router from 'express'
import { getAllOrders, getAllOrdersInTransit } from '../controllers/order.controllers'

const router = Router()

router.get('/all-orders', getAllOrders)
router.get('/all-transit-orders', getAllOrdersInTransit)

export default router
