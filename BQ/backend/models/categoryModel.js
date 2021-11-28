import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    cateName: {
        type: String,
        required: true,
    },
    catePathName: {
        type: String,
        required: true,
        unique: true
    },
    brandName: {
        type: String,
        required: true,
        ref: 'Brand'
    },
    image: {
        type: String,
        required: true,
        default: "https://st.quantrimang.com/photos/image/072015/22/avatar.jpg"
    }
},{
    timestamps: true
})



const Category = mongoose.model('Category', categorySchema)

export default Category