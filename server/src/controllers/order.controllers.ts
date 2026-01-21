import { Request, Response } from 'express'
import * as orderServices from '../services/order.servies'

async function getAllOrders(_: Request, res: Response) {
  try {
    const orders = await orderServices.getAllOrders()

    res.status(200).json({ data: orders })
  } catch {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

async function getAllOrdersInTransit(_: Request, res: Response) {
  try {
    const orders = await orderServices.getAllOrdersInTransit()

    res.status(200).json(orders)
  } catch {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export { getAllOrders, getAllOrdersInTransit }
