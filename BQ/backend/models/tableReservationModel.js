import mongoose from 'mongoose';

const TableSchema = mongoose.Schema({
    tableNo: {type: Number, required: true},
    ofBrand: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Brand'
    },
},{
    timestamps: true
})

const TableReservationSchema = mongoose.Schema({
    customer_ID: {type: String, required: true},
    customerEmail: {type: String, required: true},
    tableNo: {type: Number, required: true},
    brandName: {type: String, required: true},
    bookingStart: Date,
    bookingEnd: Date,
    status: {type: String, required: true},
},{
    timestamps: true
})

const Table = mongoose.model('Table', TableSchema)
const TableReservation = mongoose.model('TableReservation', TableReservationSchema)

export default Table
export default TableReservation