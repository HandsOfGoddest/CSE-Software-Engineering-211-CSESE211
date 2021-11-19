import mongoose from 'mongoose';

const TableReservationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Table'
    },
    time: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

const TableReservation = mongoose.model('TableReservation', TableReservationSchema)

export default TableReservation