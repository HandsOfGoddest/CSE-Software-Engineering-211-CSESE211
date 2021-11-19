import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTable } from '../actions/tableReservationActions'

function GetTable() {
    let time = 5
    const dispatch = useDispatch()
    const getTable = useSelector(state => state.getTable)
    const getTableList = () => {
        dispatch(getTable(time))
    }
    return (
        <div>
            <button onClick={getTableList}>get</button>
        </div>
    )
}

export default GetTable
