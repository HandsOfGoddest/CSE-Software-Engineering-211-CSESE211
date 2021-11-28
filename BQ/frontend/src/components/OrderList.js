import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderList } from '../actions/orderActions'

function OrderList() {
    const dispatch = useDispatch()
    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = OrderList
    useEffect(() => {
        dispatch(getOrderList())
    }, [dispatch])

    return (
        <div>
            b
        </div>
    )
}

export default OrderList
