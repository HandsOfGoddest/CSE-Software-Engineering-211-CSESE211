import asyncHandler from 'express-async-handler'
import Brand from '../models/brandModel.js'
import Product from '../models/productModel.js'
import Category from '../models/categoryModel.js'

// @desc    Fetch all brands
// @route   GET /api/brands
// @access  Public
const getBrand = asyncHandler(async(req, res) => {
    const brands = await Brand.find({})
    res.json(brands)
})


const getBrandByPathName = asyncHandler(async(req, res) => {
    const brand = await Brand.findOne({pathName: `${req.params.id}`})
    if (brand) {
        res.json(brand)
    }
    else {
        res.status(404)
        throw new Error('Brand not found!')
    }
})


const addBrand = asyncHandler(async(req, res) => {
    const { brandName, pathName } = req.body
    const brandPathNameExists = await Brand.findOne({pathName})
    const brandNameExists = await Brand.findOne({brandName})
    if (brandPathNameExists) {
        res.status(400)
        throw new Error('Pathname already existed')
    }

    if (brandNameExists) {
        res.status(400)
        throw new Error('Name already existed')
    }

    const newBrand = await Brand.create({
        brandName,
        pathName
    })

    if (newBrand) {
        await newBrand.save()
        res.status(201).json({
            _id: newBrand._id,
            brandName: newBrand.brandName,
            pathName: newBrand.pathName,
            image: newBrand.image
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

const getProductListByPathname = asyncHandler(async(req, res) => {
    const brand = await Brand.findOne({pathName: `${req.params.pathName}`})
    if (brand) {
        const productList = await Product.find({brandName: brand.brandName})
        res.json(productList)
    }
    else {
        res.status(404)
        throw new Error('Brand not found!')
    }
})

const getProductListByBrandAndCatePathName = asyncHandler(async(req, res) => {
    const brand = await Brand.findOne({pathName: req.params.pathName})
    const category = await Category.findOne({cateName: req.params.cateName})
    if (brand && category) {
        const productList = await Product.find({brandName: brand.brandName, category: category.cateName})
        res.json(productList)
    }
    else {
        res.status(404)
        throw new Error('Brand or category not found!')
    }

})

const addCategory = asyncHandler(async(req, res) => {
    const { cateName, catePathName, brandName, image } = req.body
    const categoryPathNameExists = await Category.findOne({catePathName})
    const brand = await Brand.findOne({brandName})
    if (!brand) {
        res.status(400)
        throw new Error('Brandname is not existed')
    }
    if (categoryPathNameExists) {
        res.status(400)
        throw new Error('Pathname already existed')
    }

    const newCategory = await Category.create({
        cateName,
        catePathName,
        brandName,
        image
    })

    if (newCategory) {
        await newCategory.save()
        res.status(201).json({
            _id: newCategory._id,
            cateName: newCategory.cateName,
            catePathName: newCategory.catePathName,
            brandName: newCategory.brandName,
            image: newCategory.image
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

export {
    getBrand, getBrandByPathName, addBrand, getProductListByPathname,
    getProductListByBrandAndCatePathName, addCategory
}