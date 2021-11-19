import mongoose from 'mongoose';

const TableSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    timeList: [
        {
            time:{
                type: String,
            },
            status:{
                type: Num,
            },
        },
    ],
    brand: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})


const Table = mongoose.model('Table', TableSchema)

export default Table