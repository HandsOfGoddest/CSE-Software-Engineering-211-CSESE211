import express from "express";
const router = express.Router();
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getAllOrderList,
    updateStatus,
} from '../controllers/orderController.js'
import {checkClerk, protect} from '../middleware/authMiddleware.js'


router.route('/').post(protect, addOrderItems).get(protect, checkClerk, getAllOrderList)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById).put(protect, updateStatus)
router.route('/:id/pay').put(protect, updateOrderToPaid)



export default router;