import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTable } from '../actions/tableReservationActions'

function GetTable() {
    const dispatch = useDispatch()
    const [time, setTime] = useState(0)
    const getTable1 = useSelector(state => state.getTable1)
    const getTableList = () => {
        if (time != 0) dispatch(getTable(time))
    }
    const timeList = [7, 9, 11]
    return (
        <div>
            <button onClick={getTableList}>get</button>
            <select onChange={(e) => setTime(e.target.value)} >
                {
                    timeList.map((time) => {
                        return (
                            <option value={time}>{time}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default GetTable