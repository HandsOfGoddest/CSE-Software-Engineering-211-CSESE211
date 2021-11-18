import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Table from "../models/tabelModel.js";

// @desc Fetch all table
// @route GET/api/tables
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Table.find({})
    res.json(products);
  })
);
// @desc Fetch one table by ID
// @route GET/api/tables/:id
// @access Public
router.get("/:numberTable",
    asyncHandler(async (req, res) => {
      const product = await Table.find({number: req.params.numberTable});
  
      if (product) {
        res.json(product);
      } else {
        res.status(404)
        throw new Error('Product not found')
      }
    })
  );


export default router