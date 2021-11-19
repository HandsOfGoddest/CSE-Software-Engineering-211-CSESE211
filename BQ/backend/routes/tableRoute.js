import express from 'express'
import { getTablesByTime, addReservation } from '../controllers/tableReservationController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getTablesByTime)
router.route('/search').post(getTablesByTime)
router.route('/create').post(protect, addReservation)

export default router