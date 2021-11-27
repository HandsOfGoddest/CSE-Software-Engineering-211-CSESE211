import asyncHandler from "express-async-handler";
import Brand from "../models/brandModel.js";
import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

// @desc Fetch all products
// @route GET/api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
   
  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}
  const products = await Product.find({...keyword})
    
    res.json(products)
})

// @desc Fetch single product
// @route GET/api/product
// @access Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
})

// @desc Create new review
// @route POT/api/products/:id/reviews
// @ access Private/Admin

const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length
    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const createProduct = asyncHandler(async(req, res) => {
  const { name, image, description, price, countInStock } = req.body
  const brand = await Brand.findOne({pathName: req.params.brand})
  const category = await Category.findOne({catePathName: req.params.cate})
  const admin = await User.findOne({isAdmin: true})
  if (brand && category && category.brandName === brand.pathName) {
    const newProduct = await Product.create({
      user: admin._id,
      name,
      image,
      brandName: brand.brandName,
      category: category.cateName,
      description,
      price,
      countInStock
    })
    if (newProduct) {
      await newProduct.save()
      res.json(newProduct)
    }
    else {
      res.json(404)
      throw new Error("Invalid data")
    }
  }
  else {
    res.status(404)
    throw new Error("Brand or category not found!")
  }
})

const deleteProductByID = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
      await product.remove()
      res.json({message: "Product removed"})
  }
  else {
      res.status(404)
      throw new Error('Product not found')
  }
})

const updateProduct = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    product.name = req.body.name || product.name
    product.image = req.body.image || product.image
    product.description = req.body.description || product.description
    product.price = req.body.price || product.price
    product.countInStock = req.body.countInStock || product.countInStock
    product.brandName = req.body.brandName || product.brandName
    const updProduct = await product.save()
    res.json(updProduct)
  }
  else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {getProducts, getProductById, createProductReview, createProduct, deleteProductByID, updateProduct }