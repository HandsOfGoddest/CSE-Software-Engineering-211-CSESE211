import asyncHandler from 'express-async-handler'
import Brand from '../models/brandModel.js'


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
    const { name, pathName } = req.body
    const brandPathNameExists = await Brand.find({pathName})
    const brandNameExists = await Brand.find({name})

    if (brandPathNameExists) {
        res.status(400)
        throw new Error('Pathname already existed')
    }

    if (brandNameExists) {
        res.status(400)
        throw new Error('Name already existed')
    }

    const newBrand = await Brand.create({
        name,
        pathName,
        image,
        hasProducts
    })

    if (newBrand) {
        res.status(201).json({
            _id: newBrand._id,
            name: newBrand.name,
            pathName: newBrand.pathName,
            hasProducts: newBrand.hasProducts
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

export {
    getBrand, getBrandByPathName, addBrand
}