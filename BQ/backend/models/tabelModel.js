import mongoose from 'mongoose';

const TableSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    timeList: [
        {
            type: Number
        }
    ]
},{
    timestamps: true
})


const Table = mongoose.model('Table', TableSchema)

export default Table