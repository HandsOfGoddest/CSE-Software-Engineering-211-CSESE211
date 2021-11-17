import express from 'express'
import { addBrand, getBrand, getBrandByPathName } from '../controllers/brandController.js'

const router = express.Router()


router.route('/').get(getBrand)

router.route('/:id').get(getBrandByPathName)

router.route('/add').post(addBrand)

export default router