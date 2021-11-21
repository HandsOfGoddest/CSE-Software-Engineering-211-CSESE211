import asyncHandler from "express-async-handler";
import Table from "../models/tabelModel.js";
import TableReservation from "../models/tableReservationModel.js";


// @desc Get table by time
// @route GET/api/tables/
// @access Private

const getTablesByTime = asyncHandler(async (req, res) => {
    const { time } = req.body
    const tables = await Table.find({})
    
    if(tables){
      let ans = []
      for (let i=0; i<tables.length; i++) {
        if (tables[i].timeList.indexOf(time) == -1) ans.push(tables[i])
      }
      res.json(ans)
    } else {
      res.status(404)
      throw new Error('tables not found')
    }
})

// @desc Create new reservation
// @route POST/api/tables
// @access Private

const addReservation = asyncHandler(async (req, res) => {
    const { 
      tableNum, 
      time
    } = req.body

    const table = await Table.findOne({number: tableNum})

    const newReservation = await TableReservation.create({
      user: req.user._id,
      table: table._id,
      time: time
    })
    if (newReservation) {
      await newReservation.save()
      table.timeList.push(time)
      await table.save()
      res.status(201).json({
        id: newReservation._id,
        user: newReservation.user,
        table: newReservation.table,
        time: newReservation.time
      })
    }
    else {
      res.status(400)
      throw new Error('Invalid data')
    }
}
)

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