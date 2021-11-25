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

const getCateByBrandPathName = asyncHandler(async(req, res) => {
    const brand = await Brand.findOne({pathName: req.params.brandPathName})
    if (brand) {
        const categories = await Category.find({brandName: brand.brandName})
        res.json(categories)
    }
    else {
        res.status(404)
        throw new Error('Brand not found')
    }
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
    const { brandName, pathName, image } = req.body
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
        pathName,
        image
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
    const category = await Category.findOne({catePathName: req.params.catePathName})
    if (brand && category) {
        const productList = await Product.find({brandName: brand.brandName, category: category.cateName})
        console.log(productList)
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

const deleteBrandByPathName = asyncHandler(async(req, res) => {
    const brand = await Brand.findOne({pathName: req.params.id})
    const categories = await Category.find({brandName: brand.brandName})
    const products = await Product.find({brandName: brand.brandName})
    if (brand) {
        for (let i=0; i<categories.length; i++) {
            await categories[i].remove()
        }
        for (let i=0; i<products.length; i++) {
            await products[i].remove()
        }
        await brand.remove()
        res.json({message: "Brand removed"})
    }
    else {
        res.status(404)
        throw new Error('Brand not found')
    }
})

const deleteCateByPathName = asyncHandler(async(req, res) => {
    const category = await Category.find({catePathName: req.params.pathName})
    const products = await Product.find({category: category.cateName})
    if (category) {
        for (let i=0; i<products.length; i++) {
            await products[i].remove()
        }
        await category.remove()
        res.json({message: "Category removed"})
    }
    else {
        res.status(404)
        throw new Error('Category not found')
    }
})

export {
    getBrand, getBrandByPathName, addBrand, getProductListByPathname,
    getProductListByBrandAndCatePathName, addCategory, deleteBrandByPathName,
    deleteCateByPathName, getCateByBrandPathName
}