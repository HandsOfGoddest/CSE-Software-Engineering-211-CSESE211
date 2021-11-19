import asyncHandler from "express-async-handler";
import Table from "../models/tabelModel.js";
import TableReservation from "../models/tableReservationModel.js";


// @desc Get table by time
// @route GET/api/tables/
// @access Private

const getTablesByTime = asyncHandler(async (req, res) => {
    const tables = await Table.find({timeList: req.query.time})
    
    if(tables){
      res.json(tables)
    } else {
      res.status(404)
      throw new Error('tables not found')
    }
})

// @desc Create new reservation
// @route POST/api/tables
// @access Private

const addReservation = asyncHandler(async (req, res) => {
    const{ 
        tableNum, 
        time,
    } = req.body

    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
        return
    } else {
        const reservation = new TableReservation({
            user: req.user._id,
            table: req.table._id, 
            time: req.time, 
        })

        const createReservation = await reservation.save()

        res.status(201).json(createReservation)
    }
})

// @desc POST table status
// @route POST/api/tables/reservation
// @access Private

const updateTablesStatus = asyncHandler(async (req, res) => {
    const tables = await Table.find({number: req.body.number})
    
    if(tables){
      res.json(tables)
    } else {
      res.status(404)
      throw new Error('tables not found')
    }
})

export {getTablesByTime, addReservation}