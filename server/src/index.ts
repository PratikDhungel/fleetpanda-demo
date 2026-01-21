import express from 'express'
import dotenv from 'dotenv'
import hubRoutes from './routes/hub.routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.use('/api', hubRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
