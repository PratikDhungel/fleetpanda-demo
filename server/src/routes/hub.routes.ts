import { Router } from 'express'
import { getAllHubs } from '../controllers/hub.controllers'

const router = Router()

router.get('/all-hubs', getAllHubs)

export default router
