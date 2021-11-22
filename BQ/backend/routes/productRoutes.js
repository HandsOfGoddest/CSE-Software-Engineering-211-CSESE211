import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProductReview,
  createProduct,
} from "../controllers/productController.js";
import { checkAdmin, protect} from "../middleware/authMiddleware.js";
router.route("/").get(getProducts)
router.route('/:id/reviews').post(protect, createProductReview)
router.route("/:id").get(getProductById);

router.route("/:brand/:cate/").post(protect, checkAdmin,createProduct)

export default router;
