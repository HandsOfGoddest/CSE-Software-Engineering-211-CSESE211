import mongoose from 'mongoose';

const brandSchema = mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        unique: true
    },
    pathName: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        default: "https://st.quantrimang.com/photos/image/072015/22/avatar.jpg"
    }
},{
    timestamps: true
})



const Brand = mongoose.model('Brand', brandSchema)

export default Brand