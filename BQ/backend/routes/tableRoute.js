import express from 'express'
import { getTablesByTime, addReservation } from '../controllers/tableReservationController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get()
router.route('/search').get(getTablesByTime)
router.route('/reservation').post(protect, addReservation)

export default router