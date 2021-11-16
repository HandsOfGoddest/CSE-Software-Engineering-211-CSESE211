import express from 'express'
import { getBrand, getBrandByPathName } from '../controllers/brandController.js'

const router = express.Router()


router.route('/').get(getBrand)

router.route('/:id').get(getBrandByPathName)

export default router