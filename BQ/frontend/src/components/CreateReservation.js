import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReservation } from '../actions/tableReservationActions'


function CreateRes() {
    let tableNum = "1"
    let time = 12
    const dispatch = useDispatch()
    const tableReservationCreate = useSelector(state => state.tableReservationCreate)

    const { loading, error, reservation } = tableReservationCreate

    const createRes = () => {
        dispatch(createReservation(tableNum, time))
    }

    return (
        <div>
            <h1>Create</h1>
            <button onClick={createRes}>create</button> 
        </div>
    )
}

export default CreateRes