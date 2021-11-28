import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// @desc Create new order
// @route POST/api/orders
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    for (let i = 0; i < orderItems.length; i++) {
      const product = await Product.findById(orderItems[i].product)
      if (product.countInStock < orderItems[i].qty) {
        res.status(400).json({ message: `Sản phẩm ${product.name} không đủ số lượng` })
        throw new Error(`Sản phẩm ${product.name} không đủ số lượng`)
        return
      }
    }

    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice
    })

    for (let i = 0; i < orderItems.length; i++) {
      const product = await Product.findById(orderItems[i].product)
      product.countInStock = await product.countInStock - orderItems[i].qty
      const productsave = await product.save()
      console.log(product.countInStock)
    }

    const createOrder = await order.save()


    res.status(201).json(createOrder)
  }
})


// @desc Get order by id
// @route GET/api/orders/:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
  
    if(order){
      res.json(order)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
  })

// @desc  Update order to paid
// @route GET/api/orders/:id/pay
// @ access Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if(order){
      order.isPaid = true
      order.paidAt = Date.now()
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      }
      const updatedOrder = await order.save()
  
      res.json(updatedOrder)
  
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
  })
  
// @desc  Get logged in user order
// @route GET/api/orders/myorders
// @ access Private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user: req.user._id})
  res.json(orders)
  
})

const getAllOrderList = asyncHandler(async(req, res) => {
  const orderList = await Order.find({})
  res.json(orderList)
})

const updateStatus = asyncHandler(async(req, res) => {
  const order = await Order.findById(req.params.id)
  if (order) {
    if(req.body.status === "Đã thanh toán"){
      order.isPaid = true
    }
    else {
      order.status = req.body.status || order.status
    }
    const newOrder = await order.save()
    res.json(newOrder)
  }
  else {
    res.status(404)
    throw new Error("Order not found")
  }
})

export {addOrderItems, getOrderById, updateOrderToPaid, getMyOrders,
getAllOrderList, updateStatus }