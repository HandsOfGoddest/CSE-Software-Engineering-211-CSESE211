import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";


// @desc  Get user cart 
// @route GET/api/cart
// @ access Private

const getMyCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findOne({user: req.user._id})
    res.json(cart.orderItems)
})

// @desc Update cart
// @route POST/api/cart/update
// @access Private

const updateCart = asyncHandler(async (req, res) => {
  const orderItems = req.body
  console.log(orderItems)
  
  if(!orderItems){
      res.status(400)
      throw new Error('No order items')
      return
  } else {
      const cart = await Cart.findOneAndDelete({user: req.user._id})
      
      const newcart = new Cart({
        user: req.user._id,
        orderItems
      })

      const createCart = await newcart.save()
      res.status(201).json(createCart)
  }
})

  
  export { getMyCart, updateCart}