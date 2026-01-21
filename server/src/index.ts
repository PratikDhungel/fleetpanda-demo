import express from 'express'
import dotenv from 'dotenv'
import hubRoutes from './routes/hub.routes'
import driverRoutes from './routes/driver.routes'
import vehicleRoutes from './routes/vehicles.routes'
import orderRoutes from './routes/order.routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.use('/api/hubs', hubRoutes)
app.use('/api/drivers', driverRoutes)
app.use('/api/vehicles', vehicleRoutes)
app.use('/api/orders', orderRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
