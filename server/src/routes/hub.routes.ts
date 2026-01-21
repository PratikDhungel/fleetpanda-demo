import { Router } from 'express'
import { getAllHubs } from '../controllers/hub.controllers'

const router = Router()

router.get('/hubs', getAllHubs)

export default router
