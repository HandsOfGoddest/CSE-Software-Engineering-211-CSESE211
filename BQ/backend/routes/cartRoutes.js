import express from "express";
const router = express.Router();
import {
    getMyCart,
    updateCart,
} from '../controllers/cartController.js'
import {protect} from '../middleware/authMiddleware.js'


router.route('/').get(protect, getMyCart)
router.route('/update').post(protect, updateCart)


export default router;