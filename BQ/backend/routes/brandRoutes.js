import express from 'express'
import { addBrand, addCategory, deleteBrandByPathName, deleteCateByPathName, getBrand, getBrandByPathName, getCateByBrandPathName, getProductListByBrandAndCatePathName, getProductListByPathname } from '../controllers/brandController.js'
import { protect, checkAdmin } from "../middleware/authMiddleware.js"
const router = express.Router()


router.route('/').get(getBrand)

router.route('/catelist/:brandPathName').get(getCateByBrandPathName)

router.route('/:id').get(getBrandByPathName).delete(protect, checkAdmin, deleteBrandByPathName)

router.route('/getproducts/:pathName').get(getProductListByPathname)

router.route('/getproducts/:pathName/:catePathName').get(getProductListByBrandAndCatePathName)

router.route('/add').post(protect, checkAdmin, addBrand)

router.route('/addCategory').post(protect, checkAdmin, addCategory)

router.route('/deleteCate/:pathName').delete(protect, checkAdmin, deleteCateByPathName)

export default router